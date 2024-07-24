<script>

export default {
  name: "AppHeader",
  methods:{
    logout() {
      this.$store.commit('login/removeToken')
      this.$router.push('/login')
    }
  }
}
</script>

<template>
  <div class="m-header">
    <strong>Машинова Дарья</strong>
    <m-button style="padding: 2%; align-self: flex-end" @click="logout" >Выход</m-button>
  </div>
</template>

<style scoped>

.m-header {
  margin: 30px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background: #E58F65;
  box-shadow: 0 5px 10px 0 #D05353;
  color: #191919;
}

</style>