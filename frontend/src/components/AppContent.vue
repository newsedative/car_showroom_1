<script>
import CreateForm from "@/components/CreateForm.vue";
import CarsList from "@/components/CarsList.vue";
import MDialog from "@/components/UI/MDialog.vue";
import MSelect from "@/components/UI/MSelect.vue";

export default {
  name: "AppContent",
  components: {MSelect, MDialog, CreateForm, CarsList},
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
        ]
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
  },
  computed: {
    sortedCars() {
        return [...this.cars].sort((car1, car2) => car1[this.selectSort] > car2[this.selectSort] ? -1 : 1);
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
      <div style="padding-top: 20px">
        <m-button @click="dlgShowOrNot = true" style="padding: 2%; align-self: flex-end">Добавить</m-button>
        <!-- <m-button @click="fetchCars" style="padding: 2%; margin-left:30px">Получить инфу</m-button> -->
      </div>
      <div style="padding-top: 20px">
        <m-select v-model="selectSort" :options="sortOptions"></m-select>
      </div>
      <cars-list :cars="sortedCars" @remove="removeCars"></cars-list>
    </div>
  </div>

</template>

<style scoped>
.m-content {
  margin: 30px;
}
</style>