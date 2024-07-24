<script>
export default {
  name: "CarForm",
  data() {
    return {
      car: {
        car_brand: '',
        car_model: '',
        country: '',
        price: '',
      }
    }
  },
  methods: {
    createCar() {
      this.$ajax.post('api/auto/', {...this.car}).then(response=> {
        const {data} = response
        this.$emit('create', data)
      })
    },
  }
}
</script>

<template>
  <div>
    <form class="m-form" @submit.prevent>
      <h3>Добавить автомобиль</h3>
      <m-input v-model="car.brand" type="text" placeholder="Марка"></m-input>
      <m-input v-model="car.model" type="text" placeholder="Модель"></m-input>
      <m-input v-model="car.country" type="text" placeholder="Страна"></m-input>
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