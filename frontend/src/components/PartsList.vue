<script>

export default {
  props: {
    carparts: {
      type: Array,
      required: true
    }
  },
  name: "PartsList"
}
</script>

<template>
  <div>
    <div class="m-item">
      <table class="tabel-c">
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Country</td>
          <td>Description</td>
          <td>Autos</td>
          <td>Action</td>
        </tr>
        <transition-group name="carparts-list">
          <tr class="carparts" v-for="carpart in carparts" :key="carpart.id" >
            <td>{{ carpart.id }}</td>
            <td>{{ carpart.name }}</td>
            <td>{{ carpart.country }}</td>
            <td>{{ carpart.description }}</td>
            <td>{{ carpart.autos }}</td>
            <td><m-button @click="$emit('remove', carpart)" style="width: max-content; align-self: flex-end;" class="x-btn">Удалить</m-button></td>
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

.carparts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.carparts-list-enter-active,
.carparts-list-leave-active {
  transition: all 1s ease;
}
.carparts-list-enter-from,
.carparts-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.carparts-list-move {
  transition: transform 0.8s ease;
}
</style>