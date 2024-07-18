<script>
import CreateForm from "@/components/CreateForm.vue";
import CarsList from "@/components/CarsList.vue";
import MDialog from "@/components/UI/MDialog.vue";
import MButton from "@/components/UI/MButton.vue";

export default {
  name: "AppContent",
  components: {MButton, MDialog, CreateForm, CarsList},
  data() {
    return {
      cars: [
        {id: 1, brand: "Mazda", model: '6 III GJ', mileage: 35000, year: 2023},
      ],
      dlgShowOrNot: false,
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
}
</script>

<template>
  <div>
    <div class="x-content">
      <m-button @click="dlgShow" style="padding: 2%; align-self: flex-end">Добавить</m-button>
      <m-dialog v-model:show="dlgShowOrNot">
        <create-form @create="createCar"></create-form>
      </m-dialog>
      <cars-list :cars="cars"></cars-list>
    </div>
  </div>

</template>

<style scoped>

</style>
