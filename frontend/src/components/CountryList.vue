<script>

export default {
  props: {
    countries: {
      type: Array,
      required: true
    }
  },
  name: "CountryList"
}
</script>

<template>
  <div>
    <div class="m-item">
      <table class="tabel-c">
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Code</td>
          <td>Currency</td>
          <td>Action</td>
        </tr>
        <transition-group name="part-list">
          <tr class="countries" v-for="country in countries" :key="country.id" >
            <td>{{ country.id }}</td>
            <td>{{ country.country_name }}</td>
            <td>{{ country.code }}</td>
            <td>{{ country.currency }}</td>
            <td><m-button @click="$emit('remove', country)" style="width: max-content; align-self: flex-end;" class="x-btn">Удалить</m-button></td>
          </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<style scoped>
.m-item {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  margin-top: 15px;
  border-radius: 5px;
  background: #E58F65;
  box-shadow: 0 5px 10px 0 #D05353;
  color: #191919;
}

.m-item p {
  margin-top: 5px;
  margin-bottom: 5px;
}

.tabel-c {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  height: auto;
}

tr {
  display: flex;
  justify-content: space-around;
}

.cars-list-item {
  display: inline-block;
  margin-right: 10px;
}
.part-list-enter-active,
.part-list-leave-active {
  transition: all 1s ease;
}
.part-list-enter-from,
.part-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.part-list-move {
  transition: transform 0.8s ease;
}
</style>