<script setup lang="ts">
import ListItem from '../ui/ListItem.vue';
import { IncomeForm } from '@/utils/types';
import { useStore } from '@/vuex/store';
import { computed } from '@vue/reactivity';
import { convertNumberToCommaNumber } from '@/utils/converter';

const store = useStore();

const list: IncomeForm[] = computed(() =>
  store.state.IncomeStore.incomeLists.map((item) => ({
    ...item,
    ...{ category: item.category === 'income' ? '소득' : '주식' },
    ...{ cycle: item.cycle === 'fixed' ? '고정 수입' : '비고정 수입' },
  }))
);
const total: string = computed(() =>
  convertNumberToCommaNumber(store.getters['IncomeStore/totalIncome'])
);
</script>

<template>
  <div class="w-96 m-4 shadow-slate-400 shadow-md rounded-md">
    <h1 class="font-bold my-4 pt-4 text-center text-lg">💰 나의 수입 💵</h1>
    <list-item :list="list" />
    <div class="text-right mb-4 py-4 border-t border-neutral-200 px-4 mx-2">
      <span>나의 현재 총 자산은 {{ total }}원 입니다.</span>
    </div>
  </div>
</template>

<style scoped></style>
