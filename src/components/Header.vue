<script setup lang="ts">
import { ModalView } from '../utils/types';
import { useStore } from '../vuex/store';

const store = useStore();

const buttonStyle =
  'flex items-center justify-center gap-x-2 px-2 hover:scale-105';

const onClickHandle = (payload: ModalView) => {
  store.commit('ModalStore/setModalView', payload);
  store.commit('ModalStore/openModal');
};
</script>

<template>
  <nav class="w-full h-12 bg-amber-200 cursor-pointer fixed flex">
    <div
      id="menu-bar"
      class="w-fit h-full relative left-4 text-xl leading-10 flex items-center hover:scale-105"
    >
      <font-awesome-icon icon="bars" />
    </div>
    <h1
      class="w-fit h-full text-2xl font-bold flex items-center justify-center absolute left-1/2 -translate-x-1/2"
    >
      가계 리포터 🚀
    </h1>
    <div
      class="w-fit justify-center leading-10 gap-x-2 hidden md:flex absolute inset-y-0 right-0"
    >
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
