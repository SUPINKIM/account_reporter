<script setup lang="ts">
const buttonStyle =
  'flex items-center justify-center gap-x-2 px-2 hover:scale-105';
</script>

<template>
  <nav
    class="w-full h-12 grid grid-cols-7 fixed top-0 bg-amber-200 cursor-pointer"
  >
    <div
      id="menu-bar"
      class="h-full col-span-1 text-xl leading-10 flex items-center pl-8 hover:scale-105"
    >
      <font-awesome-icon icon="bars" />
    </div>
    <h1
      class="col-span-5 text-2xl font-bold h-full flex items-center justify-center"
    >
      가계 리포터 🚀
    </h1>
    <div class="flex justify-center col-span-1 leading-10 gap-x-2">
      <button :class="buttonStyle">
        수입<font-awesome-icon icon="plus" class="text-red-300" />
      </button>
      <button :class="buttonStyle">
        지출<font-awesome-icon icon="plus" class="text-blue-300" />
      </button>
    </div>
  </nav>
  <Teleport />
</template>

<style scoped />
