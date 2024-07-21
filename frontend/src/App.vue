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
          id: '',
          brand: '',
          model: '',
          country: '',
          price: '',
        }
      },
    }
</script>

<template>
  <div class="main-block">
    <app-header></app-header>
    <app-content></app-content>
  </div>

</template>

<style scoped>
    .main-block {
      margin: 0 auto;
    }
</style>
