<script>
import CarForm from "@/components/CarForm.vue";
import CarsList from "@/components/CarsList.vue";
import AppHeader from "@/components/AppHeader.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "CarPage",
  components: {Navbar, AppHeader, CarForm, CarsList},
  data() {
    return {
      cars: [
        ],
      dlgShowOrNot: false,
      selectSort: '',
      sortOptions: [
          {value: 'car_brand', name: 'по названию'},
          {value: 'price', name: 'по цене'},
        ],
      isCarsLoading: false,
      searchQuery: '',
      changeOrN: false
    }
  },
  mounted() {
    this.fetchCars();
  },
  methods: {
    createCar(data) {
      const content = {
        car_brand: data.car_brand,
        car_model: data.car_model,
        country_id: data.country,
        price: data.price,
      }
      console.log(content);
      this.$ajax.post('api/auto/', content)
                .then(response => this.cars.push({...data, id:response.data.id}))
      this.dlgShowOrNot = false
    },
    removeCars(car) {
      this.$ajax.delete(`api/auto/${car.id}/`)
      this.cars = this.cars.filter(elem => elem.id !== car.id)
    },
    changeCar(car) {
      console.log(car)
      this.changeOrN = true
      this.dlgShowOrNot = true
    },
    async fetchCars() {
      try {
        this.isCarsLoading = true;
        const response = await this.$ajax.get('api/auto/');
        this.cars = response.data;
      } catch (e) {
        alert('error');
      } finally {
        // eslint-disable-next-line no-debugger
        debugger;
        this.isCarsLoading = false;
      }

    }
  },
  computed: {
    sortedCars() {
        return [...this.cars].sort((car1, car2) => car1[this.selectSort] > car2[this.selectSort] ? -1 : 1);
    },
    sortAndSearchCars() {
      return this.sortedCars.filter(car => car.car_brand.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
}
</script>

<template>
  <div>
    <div>
        <app-header></app-header>
        <navbar></navbar>
      </div>
    <div class="m-content">

      <m-dialog :show="dlgShowOrNot">
        <car-form @create="createCar"></car-form>
      </m-dialog>
      <div>
        <m-input v-model="searchQuery" placeholder="Поиск..."></m-input>
      </div>
      <div style="padding-top: 20px">
        <m-button @click="dlgShowOrNot = true" style="padding: 2%; align-self: flex-end" :changeOrNot="changeOrN">Добавить</m-button>
        <m-button @click="fetchCars" style="padding: 2%; margin-left:30px">Обновить</m-button>
      </div>
      <div style="padding-top: 20px">
        <m-select v-model="selectSort" :options="sortOptions"></m-select>
      </div>
      <cars-list :cars="sortAndSearchCars" @remove="removeCars" @change="changeCar" v-if="!isCarsLoading"></cars-list>
      <div v-else>Идёт загрузка...</div>
    </div>
  </div>

</template>

<style scoped>
.m-content {
  margin: 30px;
}
</style>