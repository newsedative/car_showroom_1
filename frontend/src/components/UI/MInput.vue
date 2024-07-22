<script>
export default {
  name: "MInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<template>
  <input :value="modelValue" @input="updateInput" type="text" placeholder="Имя" class="m-input">
</template>

<style scoped>
.m-input {
  height: 25px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  border-radius: 0.25rem;
  outline: 0;
}

.m-input:focus {
  border-color: #bdbdbd;
  box-shadow: 0 0 0 0.1rem #D05353;
}

</style>