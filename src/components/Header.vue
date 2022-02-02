<script setup lang="ts">
import { useStore } from 'vuex';
import { ModalView } from '../vuex/store';

const store = useStore();

const buttonStyle =
  'flex items-center justify-center gap-x-2 px-2 hover:scale-105';

const onClickHandle = (payload: ModalView) => {
  store.commit('setModalView', payload);
  store.commit('openModal');
};
</script>

<template>
  <nav class="w-full h-12 grid grid-cols-7 bg-amber-200 cursor-pointer">
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
      <button :class="buttonStyle" @click="onClickHandle('INCOME_FORM')">
        수입<font-awesome-icon icon="plus" class="text-red-300" />
      </button>
      <button :class="buttonStyle" @click="onClickHandle('EXPENDITURE_FORM')">
        지출<font-awesome-icon icon="plus" class="text-blue-300" />
      </button>
    </div>
  </nav>
</template>

<style scoped />
