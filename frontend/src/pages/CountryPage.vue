<script>
// import CountryForm from "@/components/CountryForm.vue";
// import CountryList from "@/components/CountryList.vue";
// import AppHeader from "@/components/AppHeader.vue";
// import Navbar from "@/components/Navbar.vue";

export default {
  name: "CarPartPage",
  //components: {Navbar, AppHeader, CountryForm, CountryList},
  data() {
    return {
      countries: [],
      dlgShowOrNot: false,
      isCountryLoading: false,
      headers: [
        {text: 'ID', value: 'id'},
        {text: 'Название', value: 'country_name'},
        {text: 'Код', value: 'code', sortable: false,},
        {text: 'Валюта', value: 'currency', sortable: false,},
        {text: 'Действие', value: 'action', sortable: false,},
      ],
      search: '',
    }
  },
  mounted() {
    this.fetchCountry();
  },
  methods: {
    createCountry(data) {
      const content = {
        country_name: data.country_name,
        code: data.code,
        currency: data.currency
      }
      this.$ajax.post('api/country/', content)
          .then(response => this.countries.push({...data, id: response.data.id}))
      this.dlgShowOrNot = false
    },
    removeCountry(country) {
      this.$ajax.delete(`api/country/${country.id}/`)
      this.countries = this.countries.filter(elem => elem.id !== country.id)
    },
    async fetchCountry() {
      try {
        this.isCountryLoading = true;
        const response = await this.$ajax.get('api/country/');
        console.log(response);
        this.countries = response.data;
      } catch (e) {
        alert('error');
      } finally {
        // eslint-disable-next-line no-debugger
        debugger;
        this.isCountryLoading = false;
      }
    },
    logout() {
      this.$store.commit('login/removeToken')
      this.$router.push('/login')
    },
    showDialog() {
      this.dlgShowOrNot = true;
    }
  },
}
</script>

<template>
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
      <v-text-field
          v-model="search"
          label="Поиск..."
          :rules="rules"
          hide-details="auto"
      ></v-text-field>
    </div>

    <v-toolbar
        flat
    >
      <v-btn
          color="#D05353"
          class="mb-2"
          @click="showDialog"
      >
        Добавить
      </v-btn>
      <v-dialog
          v-model="dlgShowOrNot"
          width="500"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Добавить страну</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Название"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Код"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Валюта"
                      required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dlgShowOrNot = false"
            >
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="dlgShowOrNot = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-toolbar>

    <v-data-table
        :headers="headers"
        :items="countries"
        class="elevation-1"
        :search="search"
    >
    </v-data-table>


  </v-container>
</template>

<style scoped>
</style>