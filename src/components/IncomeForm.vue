<script setup lang="ts"></script>

<template>
  <div
    class="modal-content-container w-5/12 h-2/4 bg-white absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 p-4"
    @click.stop
  >
    <div class="modal-content-title">수입 항목 추가하기</div>
    <div class="w-full border my-4"></div>
    <div class="flex flex-col gap-y-2">
      <label>주기</label>
      <select>
        <option value="fixed">고정</option>
        <option value="non-fixed">비 고정</option>
      </select>
    </div>
    <div class="flex flex-col gap-y-2 my-4">
      <label>종류</label>
      <select>
        <option value="income">근로 소득</option>
        <option value="stock">주식</option>
      </select>
    </div>
    <div>
      <input class="border mr-2" type="number" />
      <span>원</span>
    </div>
  </div>
</template>

<style scoped></style>
