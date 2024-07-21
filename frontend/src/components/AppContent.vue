<script>
  import CreateForm from "@/components/CreateForm.vue";
  import CarsList from "@/components/CarsList.vue";
  import MDialog from "@/components/UI/MDialog.vue";
  import MButton from "@/components/UI/MButton.vue";
  import MSelecter from "@/components/UI/MSelecter.vue";
  import axios from 'axios'

  export default {
    name: "AppContent",
    components: {MSelecter, MButton, MDialog, CreateForm, CarsList},
    data() {
      return {
        cars: [
          {id: Date.now(), brand: "Mazda", model: '6 III GJ', country: 'Япония', price: 5000000},
        ],
        dlgShowOrNot: false,
        SelectedSort: '',
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
      dlgShow() {
        this.dlgShowOrNot = true
      },
      removeCars(car) {
        this.cars = this.cars.filter(elem => elem.id !== car.id)
      },
      async fetchCars() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/auto/');
          console.log(response);
        } catch (e) {
          console.log(e);
          alert('Error');
        }
      }
    },
    computed: {
      sortedCars() {
        return [...this.cars].sort((car1, car2) => car1[this.SelectedSort] > car2[this.SelectedSort] ? -1 : 1);
      }
    }
  }
</script>

<template>
  <div>
    <div class="m-content">
      <div style="padding-top: 20px">
        <m-button @click="dlgShow" style="padding: 2%; align-self: flex-end">Добавить</m-button>
        <m-button @click="fetchCars" style="padding: 2%; margin-left:30px">Получить инфу</m-button>
      </div>
      <div style="padding-top: 20px">
        <m-selecter v-model="SelectedSort" :options="sortOptions"></m-selecter>
      </div>

      <m-dialog v-model:show="dlgShowOrNot">
        <create-form @create="createCar"></create-form>
      </m-dialog>
      <cars-list :cars="sortedCars" @remove="removeCars"></cars-list>
    </div>
  </div>

</template>

<style scoped>
  .m-content {
    margin: 30px;
  }
</style>
