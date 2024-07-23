<template>
  <div class="l-form">
    <form class="m-form" @submit.prevent="onSubmit">
      <h3>Вход</h3>
      <m-input v-model="username" type="text" placeholder="Имя пользователя"></m-input>
      <m-input v-model="password" type="password" placeholder="Пароль"></m-input>
      <m-button :loading="loading" @click="form = true"
            type="submit" style="padding: 2%; align-self: flex-end">Вход</m-button>
    </form>
  </div>
</template>

<script>

import {mapActions} from "vuex";
export default {
  name: "loginPage",
  data() {
    return {
      username: null,
      password: null,
      loading: false,
      form: false,
    }
  },
  methods: {
    ...mapActions(['login/login']),
    loginUser () {
      this['login/login']({username: this.username, password: this.password, router: this.$router})
    },
    onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
        this.loginUser()
      },
      required (v) {
        return !!v || 'Необходимо ввести данные!'
    },
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