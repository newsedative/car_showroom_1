<template>
  <div class="l-form">
    <form class="m-form" @submit.prevent>
      <h3>Вход</h3>
      <m-input v-model="username" type="text" placeholder="Имя пользователя"></m-input>
      <m-input v-model="password" type="password" placeholder="Пароль"></m-input>
      <m-button style="padding: 2%; align-self: flex-end">Вход</m-button>
    </form>
  </div>
</template>

<script>


import {toFormData} from "axios";

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      incorrectAuth: false
    }
  },
  methods: {
    submitForm(e) {
      const.toFormData()
    }
  }
}
</script>

<style scoped>
.m-form {
  width: 60%;
  background: #E58F65;
  box-shadow: 0 5px 10px 0 #D05353;
  border-radius: 8px;
  padding: 1px 10px 10px 10px;
  margin-top: 15px;
  display:flex;
  flex-direction: column;
  color: #191919;
}
.l-form {
  display:flex;
  align-items:center;
  justify-content:center;
}
</style>