<script>
export default {
  name: "MSelect",
  props: {
    value: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <select :value="value" @change="$emit('input', $event.target.value)" style="border: 1px solid">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options"
            :key="option.value"
            :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped>

</style>