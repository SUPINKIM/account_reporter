<script setup lang="ts">
const numbers = new Array(10).fill(0).map((_, idx) => idx);
const alpha = ['+', '-'];
</script>

<template>
  <div class="w-20 grid grid-cols-3">
    <button
      class="m-4 bg-amber-200 w-4 h-4 leading-3"
      v-for="num in [...numbers, ...alpha]"
      :key="num"
    >
      {{ num }}
    </button>
  </div>
</template>

<style scoped></style>
