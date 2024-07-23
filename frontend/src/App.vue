<template>
  <div class="main-block">
    <div>
      <app-header></app-header>
      <navbar></navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {AppHeader, Navbar}

}
</script>

<style scoped>
.main-block {
  margin: 0 auto;
}
</style>