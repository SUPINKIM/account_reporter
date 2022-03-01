<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Category, Cycle } from '../utils/types';
import { useStore } from '../vuex/store';
import Form from './ui/Form.vue';
import Button from './ui/Button.vue';

const store = useStore();

const cycle: Ref<Cycle> = ref('fixed');
const category: Ref<Category> = ref('income');

const earning = ref(0);

const selectCycle = (event: Event) => {
  cycle.value = (event.target as HTMLSelectElement).value as Cycle;
};
const selectCategory = (event: Event) => {
  category.value = (event.target as HTMLSelectElement).value as Category;
};

const onSubmitIncomeInfo = () => {
  console.log('this is emit');
};

const onCloseModal = () => {
  store.commit('closeModal');
};
</script>

<template>
  <Form>
    <div class="modal-content-title">수입 추가</div>
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
        <option value="deposit">예금</option>
        <option value="savings">적금</option>
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
    <div class="w-full mt-8 flex justify-center items-center gap-x-8">
      <Button @clickButton="onSubmitIncomeInfo" />
      <Button
        :text="'취소'"
        :color="'bg-neutral-300'"
        @clickButton="onCloseModal"
      />
    </div>
  </Form>
</template>

<style scoped></style>
