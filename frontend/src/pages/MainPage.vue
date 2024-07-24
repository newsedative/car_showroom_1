<template>
  <div>
    <div>
        <app-header></app-header>
        <navbar></navbar>
      </div>
    <div class="m-content">
      <h1>Hello</h1>
    </div>
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
.m-content {
  margin: 30px;
}
</style>