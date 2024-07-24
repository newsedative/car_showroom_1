<script>
import MSelect from "@/components/UI/MSelect.vue";

export default {
  name: "PartForm",
  components: {MSelect},
  data() {
    return {
      carpart: {
        name: '',
        country: null,
        description: '',
        autos: [],
      },
      countries: [
          {value: null, name: "Не выбрана"}
      ],
    }
  },
  methods: {
    createPart() {
      this.$emit('create', {
        ...this.carpart
      })
    },
    async fetchCountry(){
      const response = await this.$ajax.get('api/country/')
      let array = response.data
      console.log(array);
      array.forEach(element => {
      this.countries.push({value:element.id, name: element.country_name})
      });
    }
  },
  created(){
    this.fetchCountry()
  }
}
</script>

<template>
  <div>
    <form class="m-form" @submit.prevent>
      <h3>Добавить деталь</h3>
      <m-input v-model="carpart.name" type="text" placeholder="Название"></m-input>
      <m-select v-model="carpart.country" :options="countries"></m-select>
      <m-input v-model="carpart.description" type="text" placeholder="Описание"></m-input>
      <m-input v-model="carpart.autos" type="text" placeholder="Автомобили"></m-input>
      <m-button @click="createPart">
        Добавить
      </m-button>
    </form>
  </div>
</template>

<style scoped>
.m-form {
  background: #E58F65;
  box-shadow: 0 5px 10px 0 #D05353;
  border-radius: 8px;
  padding: 1px 10px 10px 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  color: #191919;
}
</style>