<script>

    import MBtn from "@/components/UI/MButton.vue";

    export default {
      name: "CreateForm",
      components: {MBtn},
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
      <input v-model="car.brand" type="text" placeholder="Бренд" class="m-input">
      <input v-model="car.model" type="text" placeholder="Модель" class="m-input">
      <input v-model="car.mileage" type="text" placeholder="Пробег" class="m-input">
      <input v-model="car.year" type="text" placeholder="Год выпуска" class="m-input">
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

    .m-input {
      height: 25px;
      padding: 5px;
      margin-bottom: 10px;
      border: 1px solid #bdbdbd;
      font-size: 16px;
      border-radius: 0.25rem;
      outline: 0;
    }

    .m-input:focus {
      border-color: #bdbdbd;
      box-shadow: 0 0 0 0.1rem #D05353;
    }


</style>
