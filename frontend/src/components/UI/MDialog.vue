<script>
export default {
  name: "MDialog",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
<div class="m-dialog" v-if="value===true" @click="$emit('input', false)">
  <div class="m-dlg-cont" @click.stop>
    <slot></slot>
  </div>
</div>
</template>

<style scoped>
.m-dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.m-dlg-cont {
  margin: auto;
  border-radius: 8px;
  padding: 20px;
}

</style>