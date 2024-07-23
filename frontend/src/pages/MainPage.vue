<template>
  <div>
    <div>
        <app-header></app-header>
        <navbar></navbar>
      </div>
    <h1>Hello</h1>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {Navbar, AppHeader}

}
</script>

<style scoped>

</style>