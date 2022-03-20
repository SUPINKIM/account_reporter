<script setup lang="ts">
import { reactive } from 'vue';
import { Category, Cycle, IncomeForm } from '../utils/types';
import { useStore } from '../vuex/store';
import Form from './ui/Form.vue';
import Button from './ui/Button.vue';

const store = useStore();

const income: IncomeForm = reactive({
  cycle: 'fixed',
  category: 'income',
  earning: 0,
});

const selectCycle = (event: Event) => {
  income.cycle = (event.target as HTMLSelectElement).value as Cycle;
};

const selectCategory = (event: Event) => {
  income.category = (event.target as HTMLSelectElement).value as Category;
};

const onChangeEarning = (event: Event) => {
  income.earning = +(event.target as HTMLInputElement).value as number;
};

const onSubmitIncomeInfo = () => {
  console.log(income);
  if (income.earning === 0) {
    //alert이 추가될 자리.
    return;
  }
  store.dispatch('IncomeStore/addIncomeItem', income);
  store.commit('ModalStore/closeModal');
};

const onCloseModal = () => {
  store.commit('ModalStore/closeModal');
};
</script>

<template>
  <Form>
    <h1 class="modal-content-title mb-4">수입 추가</h1>
    <div class="w-full border"></div>
    <div class="flex flex-col gap-y-2 border-b-2 pb-2 mt-4">
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
        <!--<option value="deposit">예금</option>
        <option value="savings">적금</option>-->
      </select>
    </div>
    <div class="flex flex-wrap flex-col gap-y-2">
      <span>금액</span>
      <div>
        <input
          class="border mr-2 min-w-fit"
          type="number"
          min="0"
          @change="onChangeEarning"
        />
        <span>원</span>
      </div>
    </div>
    <div class="w-full flex justify-center gap-x-8 h-1/4 items-end pt-4 mt-4">
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
