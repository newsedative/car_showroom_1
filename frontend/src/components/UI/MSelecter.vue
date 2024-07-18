<template>
  <select @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option value="brand">по алфавиту</option>
    <option value="mileage">по пробегу</option>
  </select>
</template>

<script>
export default {
  name: 'm-selecter',
  props: {
    modelValue: {
      type: String,
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>

</style>