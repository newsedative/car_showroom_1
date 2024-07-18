<script>
    export default {
      name: "CreateForm",
      data() {
        return {
          car: {
            id: 2,
            brand: '',
            model: '',
            mileage: '',
            year: '',
          },
          error: '',
        }
      },
      methods: {
        createCar() {
            //if (this.brand === undefined || this.model === undefined ||
            //    this.mileage === undefined || this.year === undefined) {
            //    this.error = 'Не все данные введены';
            //    console.log(this.brand);
            //    return;
            //}
            //this.error = '';
            this.$emit('create', {...this.car})
        },
      }
    }
</script>

<template>
  <div>
    <form class="x-form" @submit.prevent>
      <h3>Добавить автомобиль</h3>
      <input v-model="car.brand" type="text" placeholder="Бренд" class="x-input">
      <input v-model="car.model" type="text" placeholder="Модель" class="x-input">
      <input v-model="car.mileage" type="text" placeholder="Пробег" class="x-input">
      <input v-model="car.year" type="text" placeholder="Год выпуска" class="x-input">
      <button @click="createCar" style="width: max-content; align-self: flex-end;" class="x-btn">Добавить</button>
    </form>
    <p class="error">{{ error }}</p>
  </div>
</template>

<style scoped>
    .x-form {
      background: #E58F65;
      box-shadow: 0 5px 10px 0 #D05353;
      border-radius: 8px;
      padding: 1px 10px 10px 10px;
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      color: #191919;
    }

    .x-input {
      height: 25px;
      padding: 5px;
      margin-bottom: 10px;
      border: 1px solid #bdbdbd;
      font-size: 16px;
      border-radius: 0.25rem;
      outline: 0;
    }

    .x-input:focus {
      border-color: #bdbdbd;
      box-shadow: 0 0 0 0.1rem #D05353;
    }

    .x-btn {
      background-color: #D05353;
      border: none;
      color: #191919;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      border-radius: 0.25rem;
      font-size: 16px;
    }

</style>
