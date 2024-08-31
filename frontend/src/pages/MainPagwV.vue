<script>

export default {
  name: "MainPageV",
  methods: {
    logout() {
      this.$store.commit('login/removeToken')
      this.$router.push('/login')
    },
  }
}
</script>

<template>
  <v-app>
    <v-container>
      <v-toolbar flat>
        <v-toolbar-title>Машинова Дарья</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-btn color="#D05353" @click="logout">Выход</v-btn>
        </div>
      </v-toolbar>
      <v-app-bar
          elevation="4"
          color="#D05353"
      >
        <v-tabs align-with-title>
          <v-tab @click="$router.push('/country')">Страны</v-tab>
          <v-tab @click="$router.push('/cars')">Автомобили</v-tab>
          <v-tab @click="$router.push('/carpart')">Запчасти</v-tab>
        </v-tabs>

      </v-app-bar>
      <div>
        Hello
      </div>
    </v-container>
  </v-app>
</template>


<style scoped>
</style>