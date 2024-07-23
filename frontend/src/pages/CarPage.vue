<script>
import CreateForm from "@/components/CreateForm.vue";
import CarsList from "@/components/CarsList.vue";
import axios from "axios";

export default {
  name: "CarPage",
  components: {CreateForm, CarsList},
  data() {
    return {
      cars: [
          {id: Date.now(), brand: "Mazda", model: '6 III GJ', country: 'Япония', price: 5000000},
        ],
      dlgShowOrNot: false,
      selectSort: '',
      sortOptions: [
          {value: 'brand', name: 'по названию'},
          {value: 'price', name: 'по цене'},
        ],
      isCarsLoading: false,
      searchQuery: '',
    }
  },
  methods: {
    createCar(data) {
      console.log(data)
      this.cars.push(data)
    },
    removeCars(car) {
        this.cars = this.cars.filter(elem => elem.id !== car.id)
    },
    async fetchCars() {
      try {
        this.isCarsLoading = true;
        const response = await axios.get('https://newsedative.pythonanywhere.com/api/auto/');
        console.log(response);
      } catch (e) {
        alert('error');
      } finally {
        this.isCarsLoading = false;
      }

    }
  },
  computed: {
    sortedCars() {
        return [...this.cars].sort((car1, car2) => car1[this.selectSort] > car2[this.selectSort] ? -1 : 1);
    },
    sortAndSearchCars() {
      return this.sortedCars.filter(car => car.brand.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

  }
}
</script>

<template>
  <div>
    <div class="m-content">
      <m-dialog v-model="dlgShowOrNot">
        <create-form @create="createCar"></create-form>
      </m-dialog>
      <div>
        <m-input v-model="searchQuery" placeholder="Поиск..."></m-input>
      </div>
      <div style="padding-top: 20px">
        <m-button @click="dlgShowOrNot = true" style="padding: 2%; align-self: flex-end">Добавить</m-button>
        <m-button @click="fetchCars" style="padding: 2%; margin-left:30px">Получить инфу</m-button>
      </div>
      <div style="padding-top: 20px">
        <m-select v-model="selectSort" :options="sortOptions"></m-select>
      </div>
      <cars-list :cars="sortAndSearchCars" @remove="removeCars" v-if="!isCarsLoading"></cars-list>
      <div v-else>Идёт загрузка...</div>
    </div>
  </div>

</template>

<style scoped>
.m-content {
  margin: 30px;
}
</style>