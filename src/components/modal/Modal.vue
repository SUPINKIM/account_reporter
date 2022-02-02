<script setup lang="ts">
import { useStore } from 'vuex';
import { defineAsyncComponent, DefineComponent } from '@vue/runtime-core';
import { ModalView } from '../../vuex/store';

const store = useStore();

const onHandleClickButton = () => {
  store.commit('setModalView', null);
  store.commit('closeModal');
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
      v-if="store.getters.modalOpenState"
      class="w-screen h-screen z-10 absolute top-0 left-0 bg-neutral-700/[0.8]"
      @click="onHandleClickButton"
    >
      <button @click="onHandleClickButton" class="text-white p-4">
        <font-awesome-icon icon="times-circle" class="text-xl" />
      </button>
      <component :is="components[store.getters.view]" />
    </div>
  </teleport>
</template>

<style></style>
