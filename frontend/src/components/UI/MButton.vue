<script>
export default {
  name: "MButton"
}
</script>

<template>
  <button class="m-button" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<style scoped>
.m-button {
  background-color: #D05353;
  border: none;
  color: #191919;
  padding: 10%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 0.5rem;
  font-size: 16px;
}
</style>