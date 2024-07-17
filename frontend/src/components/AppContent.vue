<script>
import CreateForm from "@/components/CreateForm.vue";
import CarsList from "@/components/CarsList.vue";

export default {
  name: "AppContent",
  components: {CreateForm, CarsList},
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
      <create-form @create="createCar"></create-form>
      <cars-list :cars="cars"></cars-list>
    </div>
  </div>

</template>

<style scoped>

</style>
