<script>
  import MBtn from "@/components/UI/MButton.vue";
  import MInput from "@/components/UI/MInput.vue";


    export default {
      name: "CreateForm",
      components: {MInput, MBtn},
      data() {
        return {
          car: {
            id: '',
            brand: '',
            model: '',
            mileage: '',
            year: '',
          }
        }
      },
      methods: {
        createCar() {
            this.car.id = Date.now();
            this.$emit('create', {...this.car});
            this.car =  {
              id: '',
              brand: '',
              model: '',
              mileage: '',
              year: '',
            }
        },
      }
    }
</script>

<template>
  <div>
    <form class="m-form" @submit.prevent>
      <h3>Добавить автомобиль</h3>
      <m-input v-model.trim="car.brand" placeholder="Бренд"></m-input>
      <m-input v-model.trim="car.model" placeholder="Модель"></m-input>
      <m-input v-model.number="car.mileage" placeholder="Пробег"></m-input>
      <m-input v-model="car.year" placeholder="Год выпуска"></m-input>
      <m-btn @click="createCar" style="padding: 2%; align-self: flex-end">Добавить</m-btn>
    </form>
  </div>
</template>

<style scoped>
    .m-form {
      background: #E58F65;
      box-shadow: 0 5px 10px 0 #D05353;
      border-radius: 8px;
      padding: 1px 10px 10px 10px;
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      color: #191919;
    }

</style>
