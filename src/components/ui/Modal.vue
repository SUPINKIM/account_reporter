<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const modal = computed(() => store.state.modal.isModalOpened);

const onHandleClickButton = () => {
  store.commit('closeModal');
};
</script>

<template>
  <teleport to="#modal">
    <div
      v-if="modal"
      class="w-screen h-screen z-10 absolute top-0 left-0 bg-neutral-700/[0.8]"
    >
      <button @click="onHandleClickButton" class="text-white p-4">
        <font-awesome-icon icon="times-circle" class="text-xl" />
      </button>
    </div>
  </teleport>
</template>

<style></style>
