<script>

  import MBtn from "@/components/UI/MButton.vue";

  export default {
    components: {MBtn},
    props: {
      cars: {
        type: Array,
        required: true
      }
    },
    name: "CarsList",
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
        <tr class="car" v-for="(car, index) in cars" :key="car.id">
          <td>{{ car.id }}</td>
          <td>{{ car.brand }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.country }}</td>
          <td>{{ car.price }}</td>
          <td><m-btn @click="$emit('remove', car)" style="width: max-content; align-self: flex-end;" class="x-btn">Удалить</m-btn></td>
        </tr>
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

</style>
