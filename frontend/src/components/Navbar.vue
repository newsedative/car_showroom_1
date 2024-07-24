<template>
  <div class="navbar">
    <div class="navbar-btns">
      <m-button @click="$router.push('/')"
                style="margin-right: 30px">Главная
      </m-button>
      <m-button @click="$router.push('/cars')" style="margin-right: 30px">Автомобили</m-button>
      <m-button @click="$router.push('/carpart')" style="margin-right: 30px">Запчасти</m-button>
      <m-button @click="$router.push('/country')" style="margin-right: 30px" class="current-page">Страны</m-button>
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
.current-page {
  box-shadow: 0 5px 10px 0 #D05353;
  border: 1px solid;
}

</style>