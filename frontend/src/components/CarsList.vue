<script>
    export default {
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
    <div class="x-item">
        <table class="tabel-c">
            <tr>
                <td>ID</td>
                <td>Brand</td>
                <td>Model</td>
                <td>Mileage</td>
                <td>Year</td>
            </tr>
            <div class="car" v-for="car in cars">
                <tr>
                    <td>{{ car.id }}</td>
                    <td>{{ car.brand }}</td>
                    <td>{{ car.model }}</td>
                    <td>{{ car.mileage }}</td>
                    <td>{{ car.year }}</td>
                </tr>
            </div>
        </table>
    </div>
  </div>
</template>

<style scoped>

    .x-item {
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 10px;
      margin-top: 15px;
      border-radius: 5px;
      background: #E58F65;
      box-shadow: 0 5px 10px 0 #D05353;
      color: #191919;
    }

    .x-item p {
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .tabel-c {
        width: 100%;
        border-collapse:collapse;
        border-spacing:0;
        height: auto;
    }
    tr {
        display: flex;
        justify-content: space-around;
    }

</style>
