<script>
import CreateForm from "@/components/CreateForm.vue";
import CarsList from "@/components/CarsList.vue";
import MDialog from "@/components/UI/MDialog.vue";
import MButton from "@/components/UI/MButton.vue";
import MSelecter from "@/components/UI/MSelecter.vue";

export default {
  name: "AppContent",
  components: {MSelecter, MButton, MDialog, CreateForm, CarsList},
  data() {
    return {
      cars: [
        {id: 1, brand: "Mazda", model: '6 III GJ', mileage: 35000, year: 2023},
      ],
      dlgShowOrNot: false,
      SelectedSort: '',
    }
  },
  methods: {
    createCar(data) {
      console.log(data)
      this.cars.push(data)
    },
    dlgShow() {
      this.dlgShowOrNot = true
    }
  },
  computed: {
    sortedCars() {
      let newCars;
      newCars = [...this.cars];
      if (this.SelectedSort === 'brand') {
        return newCars.sort((car1, car2) => car1.brand > car2.brand ? -1 : 1)
      } else {
        return newCars.sort((car1, car2) => car1.mileage > car2.mileage ? 1 : -1)
      }
    }
  }
}
</script>

<template>
  <div>
    <div class="m-content">
      <div style="padding-top: 20px">
        <m-button @click="dlgShow" style="padding: 2%; align-self: flex-end">Добавить</m-button>
      </div>
      <div style="padding-top: 20px">
        <m-selecter v-model="SelectedSort" ></m-selecter>
      </div>
      <m-dialog v-model:show="dlgShowOrNot">
        <create-form @create="createCar"></create-form>
      </m-dialog>
      <cars-list :cars="sortedCars"></cars-list>
    </div>
  </div>

</template>

<style scoped>
  .m-content {
    margin: 30px;
  }
</style>
