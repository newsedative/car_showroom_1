<template>
  <input type="text" class="m-inp" @input="updateInput">
</template>

<script>
export default {
  name: 'm-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
    .m-inp {
      height: 25px;
      padding: 5px;
      margin-bottom: 10px;
      border: 1px solid #bdbdbd;
      font-size: 16px;
      border-radius: 0.25rem;
      outline: 0;
    }

    .m-inp:focus {
      border-color: #bdbdbd;
      box-shadow: 0 0 0 0.1rem #D05353;
    }

</style>