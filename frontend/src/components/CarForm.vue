<script>

export default {
  name: "CarForm",
  data() {
    return {
      car: {
        car_brand: '',
        car_model: '',
        country: null,
        price: '',
      },
      countries: [
          {value: null, name: "Не выбрана"}
      ],
    }
  },
  methods: {
    createCar() {
      this.$emit('create', {
        ...this.car
      })
    },
    async fetchCountry(){
      const response = await this.$ajax.get('api/country/')
      let array = response.data
      console.log(array);
      array.forEach(element => {
      this.countries.push({value:element.id, name: element.country_name})
      });
    }
  },
  created(){
    this.fetchCountry()
  }
}
</script>

<template>
  <div>
    <form class="m-form" @submit.prevent>
      <h3>Добавить автомобиль</h3>
      <m-input v-model="car.car_brand" type="text" placeholder="Марка"></m-input>
      <m-input v-model="car.car_model" type="text" placeholder="Модель"></m-input>
      <m-select v-model="car.country" :options="countries"></m-select>
      <m-input v-model="car.price" type="text" placeholder="Стоимость"></m-input>
      <m-button @click="createCar">
        Добавить
      </m-button>
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