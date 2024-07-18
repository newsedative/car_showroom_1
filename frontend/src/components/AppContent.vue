<script>
import CreateForm from "@/components/CreateForm.vue";
import CarsList from "@/components/CarsList.vue";
import MDialog from "@/components/UI/MDialog.vue";

export default {
  name: "AppContent",
  components: {MDialog, CreateForm, CarsList},
  data() {
    return {
      cars: [
        {id: 1, brand: "Mazda", model: '6 III GJ', mileage: 35000, year: 2023},
      ],
    }
  },
  methods: {
    createCar(data) {
      console.log(data)
      this.cars.push(data)
    }
  }
}
</script>

<template>
  <div>
    <div class="x-content">
      <m-dialog :show="true">
        <create-form @create="createCar"></create-form>
      </m-dialog>
      <create-form @create="createCar"></create-form>
      <cars-list :cars="cars" @remove="deleteCar"></cars-list>
    </div>
  </div>

</template>

<style scoped>

</style>
