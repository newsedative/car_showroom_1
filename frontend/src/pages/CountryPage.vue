<script>
import CountryForm from "@/components/CountryForm.vue";
import CountryList from "@/components/CountryList.vue";
import axios from "axios";
import AppHeader from "@/components/AppHeader.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "CarPartPage",
  components: {Navbar, AppHeader, CountryForm, CountryList},
  data() {
    return {
      countries: [
          {id: Date.now(), country_name: 'Россия', code: '+7',
            currency: 'Рубль'},
        ],
      dlgShowOrNot: false,
      selectSort: '',
      sortOptions: [
          {value: 'country_name', name: 'по названию'},
        ],
      isCountryLoading: false,
      searchQuery: '',
    }
  },
  methods: {
    createCountry(data) {
      console.log(data)
      this.countries.push(data)
    },
    removeCountry(car) {
        this.countries = this.countries.filter(elem => elem.id !== car.id)
    },
    async fetchCountry() {
      try {
        this.isCountryLoading = true;
        const response = await axios.get('https://newsedative.pythonanywhere.com/api/country/');
        console.log(response);
      } catch (e) {
        alert('error');
      } finally {
        this.isCountryLoading = false;
      }

    }
  },
  computed: {
    sortedCountries() {
        return [...this.countries].sort((part1, part2) => part1[this.selectSort] > part2[this.selectSort]);
    },
    sortAndSearchParts() {
      return this.sortedCountries.filter(part => part.country_name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

  }
}
</script>

<template>
  <div>
    <div>
        <app-header></app-header>
        <navbar></navbar>
      </div>
    <div class="m-content">
      <m-dialog v-model="dlgShowOrNot">
        <country-form @create="createCountry"></country-form>
      </m-dialog>
      <div>
        <m-input v-model="searchQuery" placeholder="Поиск..."></m-input>
      </div>
      <div style="padding-top: 20px">
        <m-button @click="dlgShowOrNot = true" style="padding: 2%; align-self: flex-end">Добавить</m-button>
        <m-button @click="fetchCountry" style="padding: 2%; margin-left:30px">Получить инфу</m-button>
      </div>
      <div style="padding-top: 20px">
        <m-select v-model="selectSort" :options="sortOptions"></m-select>
      </div>
      <country-list :countries="sortAndSearchParts" @remove="removeCountry" v-if="!isCountryLoading"></country-list>
      <div v-else>Идёт загрузка...</div>
    </div>
  </div>

</template>

<style scoped>
.m-content {
  margin: 30px;
}
</style>