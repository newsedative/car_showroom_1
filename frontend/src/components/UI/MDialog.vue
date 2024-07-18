<template>
  <div class="m-dlg" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="m-dlg-cont">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
    }
  }
}
</script>

<style scoped>
    .m-dlg {
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