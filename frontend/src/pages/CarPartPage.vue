<script>
import PartForm from "@/components/PartForm.vue";
import PartsList from "@/components/PartsList.vue";
import AppHeader from "@/components/AppHeader.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "CarPartPage",
  components: {Navbar, AppHeader, PartForm, PartsList},
  data() {
    return {
      carparts: [
          {id: Date.now(), name: 'Двигатель', country: 'Япония',
            description: 'Мощный 4-цилиндровый двигатель', autos: ''},
        ],
      dlgShowOrNot: false,
      selectSort: '',
      sortOptions: [
          {value: 'name', name: 'по названию'},
        ],
      isPartLoading: false,
      searchQuery: '',
    }
  },
  methods: {
    createPart(data) {
      console.log(data)
      this.carparts.push(data)
    },
    removePart(carpart) {
        this.carparts = this.carparts.filter(elem => elem.id !== carpart.id)
    },
    async fetchParts() {
      try {
        this.isPartLoading = true;
        const response = await this.$ajax.get('api/carpart/');
        console.log(response);
        this.carparts = response.data;
      } catch (e) {
        alert('error');
      } finally {
        this.isPartLoading = false;
      }

    }
  },
  computed: {
    sortedParts() {
        return [...this.carparts].sort((part1, part2) => part1[this.selectSort] > part2[this.selectSort] ? -1 : 1);
    },
    sortAndSearchParts() {
      return this.sortedParts.filter(part => part.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
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
        <part-form @create="createPart"></part-form>
      </m-dialog>
      <div>
        <m-input v-model="searchQuery" placeholder="Поиск..."></m-input>
      </div>
      <div style="padding-top: 20px">
        <m-button @click="dlgShowOrNot = true" style="padding: 2%; align-self: flex-end">Добавить</m-button>
        <m-button @click="fetchParts" style="padding: 2%; margin-left:30px">Получить инфу</m-button>
      </div>
      <div style="padding-top: 20px">
        <m-select v-model="selectSort" :options="sortOptions"></m-select>
      </div>
      <parts-list :carparts="sortAndSearchParts" @remove="removePart" v-if="!isPartLoading"></parts-list>
      <div v-else>Идёт загрузка...</div>
    </div>
  </div>

</template>

<style scoped>
.m-content {
  margin: 30px;
}
</style>