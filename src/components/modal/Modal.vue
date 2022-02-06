<script setup lang="ts">
import { useStore } from 'vuex';
import { defineAsyncComponent } from '@vue/runtime-core';

const store = useStore();

const onHandleClickButton = () => {
  store.commit('ModalStore/setModalView', null);
  store.commit('ModalStore/closeModal');
};

const components = {
  INCOME_FORM: defineAsyncComponent(() => import('../IncomeForm.vue')),
  EXPENDITURE_FORM: defineAsyncComponent(
    () => import('../ExpenditureForm.vue')
  ),
};
</script>

<template>
  <teleport to="#modal">
    <div
      v-if="store.getters['ModalStore/modalOpenState']"
      class="w-screen h-screen z-10 absolute top-0 left-0 bg-neutral-700/[0.8]"
      @click="onHandleClickButton"
    >
      <button @click="onHandleClickButton" class="text-white p-4">
        <font-awesome-icon icon="times-circle" class="text-xl" />
      </button>
      <component :is="components[store.getters['ModalStore/view']]" />
    </div>
  </teleport>
</template>

<style scoped></style>
