<script>
import MButton from "@/components/UI/MButton.vue";

export default {
  components: {MButton},
  props: {
    cars: {
      type: Array,
      required: true
    }
  },
  name: "CarsList"
}
</script>

<template>
  <div>
    <div class="m-item">
      <table class="tabel-c">
        <tr>
          <td>ID</td>
          <td>Brand</td>
          <td>Model</td>
          <td>Country</td>
          <td>Price</td>
          <td>Action</td>
        </tr>
        <transition-group name="cars-list">
          <tr class="car" v-for="car in cars" :key="car.id" >
            <td>{{ car.id }}</td>
            <td>{{ car.car_brand }}</td>
            <td>{{ car.car_model }}</td>
            <td>{{ car.country }}</td>
            <td>{{ car.price }}</td>
            <td><m-button @click="$emit('remove', car)" style="width: max-content; align-self: flex-end;" class="x-btn">Удалить</m-button></td>
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
.cars-list-enter-active,
.cars-list-leave-active {
  transition: all 1s ease;
}
.cars-list-enter-from,
.cars-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.cars-list-move {
  transition: transform 0.8s ease;
}
</style>