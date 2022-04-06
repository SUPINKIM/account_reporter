<script setup lang="ts">
import { ModalView } from '../utils/types';
import { useStore } from '../vuex/store';
import Button from './ui/Button.vue';

const store = useStore();

const buttonStyle =
  'flex items-center justify-center gap-x-2 px-2 hover:scale-105 border rounded-full w-32 h-10 font-semibold text-sm';

const onClickHandle = (payload: ModalView) => {
  store.commit('ModalStore/setModalView', payload);
  store.commit('ModalStore/openModal');
};
</script>

<template>
  <nav
    class="w-full h-14 cursor-pointer fixed flex drop-shadow border border-neutral-200 items-center"
  >
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
      class="w-fit justify-center leading-10 gap-x-2 hidden md:flex absolute inset-y-0 right-0 items-center pr-4"
    >
      <Button
        :class-name="`${buttonStyle} border-red-300 !text-red-300`"
        :color="'bg-transparent'"
        :text="'수입 추가하기'"
        @click-button="onClickHandle('INCOME_FORM')"
      />
      <Button
        :class-name="`${buttonStyle} border-blue-300 !text-blue-300`"
        :color="'bg-transparent'"
        :text="'지출 추가하기'"
        @click-button="onClickHandle('EXPENDITURE_FORM')"
      />
    </div>
  </nav>
</template>

<style scoped />
