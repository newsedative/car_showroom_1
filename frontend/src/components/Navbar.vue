<template>
  <div class="navbar">
    <div class="navbar-btns">
      <m-button style="margin-right: 30px" @click="$router.push('/')">Главная</m-button>
      <m-button @click="$router.push('/cars')">Автомобили</m-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  margin: 30px;
  padding: 10px;
  display: flex;
  border-radius: 5px;
  background: #E58F65;
  box-shadow: 0 5px 10px 0 #D05353;
  color: #191919;
}
.navbar-btns {
  display: flex;
}

</style>