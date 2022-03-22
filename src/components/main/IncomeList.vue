<script setup lang="ts">
import { IncomeForm } from '@/utils/types';
import { useStore } from '@/vuex/store';
import { computed } from '@vue/reactivity';
import { convertNumberToCommaNumber } from '@/utils/converter';

const store = useStore();

const list: IncomeForm[] = computed(() => store.state.IncomeStore.incomeLists);
const total: string = computed(() =>
  convertNumberToCommaNumber(store.getters['IncomeStore/totalIncome'])
);
</script>

<template>
  <div class="w-96 m-4 shadow-slate-400 shadow-md rounded-md">
    <h1 class="font-bold my-4 pt-4 text-center text-lg">💰 나의 수입 💵</h1>
    <ul
      class="h-fitflex flex-col gap-y-4"
      :key="index"
      v-for="(item, index) in list"
    >
      <li
        class="grid grid-cols-3 gap-x-4 items-center justify-between px-4 shrink border-b border-neutral-200 py-2 mx-2"
      >
        <div class="text-center">
          {{ item.category === 'income' ? '소득' : '주식' }}
        </div>
        <div class="text-center">
          {{ item.cycle === 'fixed' ? '고정 수입' : '비고정 수입' }}
        </div>
        <div class="text-right">
          {{ convertNumberToCommaNumber(item.earning) }}원
        </div>
      </li>
    </ul>
    <div class="px-4 text-right mb-4 py-4">
      <span>나의 현재 총 자산은 {{ total }}원 입니다. </span>
    </div>
  </div>
</template>

<style scoped></style>
