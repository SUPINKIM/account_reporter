<script lang="ts" setup></script>

<template>
  <div
    class="modal-content-container w-8/12 md:w-5/12 bg-white absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 p-4"
    @click.stop
    @keyup.stop
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
