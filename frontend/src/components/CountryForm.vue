<script>
export default {
  name: "CountryForm",
  data() {
    return {
      country: {
        country_name: '',
        code: '',
        currency: '',
      }
    }
  },
  methods: {
    createCountry() {
      this.$emit('create', {
        ...this.country
      })
    },
  }
}
</script>

<template>
  <div>
    <form class="m-form" @submit.prevent>
      <h3>Добавить страну</h3>
      <m-input v-model="country.country_name" type="text" placeholder="Название"></m-input>
      <m-input v-model="country.code" type="text" placeholder="Код"></m-input>
      <m-input v-model="country.currency" type="text" placeholder="Валюта"></m-input>
      <m-button @click="createCountry">
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