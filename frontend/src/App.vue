<template>
  <div class="main-block">
    <router-view></router-view>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'App',
  beforeCreate() {
    this.$store.commit("initializerStore");
    const access = this.$store.state.access;
    if (access) {
      axios.defaults.headers.common['Authorization'] = access;
    } else {
      axios.defaults.headers.common['Authorization'] = ''
    }
  }

}
</script>

<style scoped>
.main-block {
  margin: 0 auto;
}
</style>