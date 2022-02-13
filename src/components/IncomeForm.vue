<script setup lang="ts">
import { computed, Ref, ref } from 'vue';
import { Category, Cycle } from '../utils/types';

const cycle: Ref<Cycle> = ref('fixed');
const category: Ref<Category> = ref('income');

const selectCycle = (event: Event) => {
  cycle.value = (event.target as HTMLSelectElement).value as Cycle;
};
const selectCategory = (event: Event) => {
  category.value = (event.target as HTMLSelectElement).value as Category;
};

const earning = ref(0);
</script>

<template>
  <div
    class="modal-content-container w-8/12 md:w-5/12 h-2/4 bg-white absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 p-4"
    @click.stop
  >
    <div class="modal-content-title">수입 항목 추가하기</div>
    <div class="w-full border my-4"></div>
    <div class="flex flex-col gap-y-2 border-b-2 pb-2">
      <label>주기</label>
      <select @change="selectCycle">
        <option value="fixed" selected>고정</option>
        <option value="non-fixed">비고정</option>
      </select>
    </div>
    <div class="flex flex-col gap-y-2 my-4 border-b-2 pb-2">
      <label>종류</label>
      <select @change="selectCategory">
        <option value="income" selected>근로</option>
        <option value="stock">주식</option>
      </select>
    </div>
    <div class="flex flex-wrap flex-col gap-y-2">
      <span>금액</span>
      <div>
        <input
          class="border mr-2 min-w-fit"
          type="number"
          min="0"
          v-model="earning"
        />
        <span>원</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
