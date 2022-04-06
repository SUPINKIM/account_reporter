<script lang="ts" setup>
const menuList = [
  {
    id: 1,
    name: 'income',
    text: '수입 추가하기',
  },
  {
    id: 2,
    name: 'expenditure',
    text: '지출 추가하기',
  },
];
</script>

<template>
  <div>
    <ul v-for="menu in menuList" :key="menu.id">
      <li>{{ menu.text }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
