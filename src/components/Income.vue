<script setup lang="ts">
interface IIncomeList {
  title: string;
  income: number;
}

const list: IIncomeList = [];
</script>

<template>
  <button class="w-14 h-7 text-3xl border border-red-300 leading-3 rounded-sm">
    +
  </button>
</template>

<style scoped></style>
