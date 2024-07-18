<template>
  <button class="m-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'm-button'
}
</script>

<style scoped>
    .m-btn {
        background-color: #D05353;
        border: none;
        color: #191919;
        padding: 10%;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 0.25rem;
        font-size: 16px;
    }

</style>