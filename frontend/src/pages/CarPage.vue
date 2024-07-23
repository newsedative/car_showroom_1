<script>
import AppHeader from "@/components/AppHeader.vue";
import AppContent from "@/components/AppContent.vue";

export default {
  components: {
    AppHeader, AppContent
  },
  name: "App",
  data() {
    return {
      brand: '',
      model: '',
      country: '',
      price: ''
    }
  },
}
</script>

<template>
  <div>
    <app-header></app-header>
    <app-content></app-content>
  </div>

</template>

<style>

.warning {
  background-color: orangered !important;
  border-color: orangered !important;
}

.success {
  background-color: green !important;
  border-color: green !important;
}
</style>
