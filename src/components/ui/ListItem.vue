<script lang="ts" setup>
import { ListItemProps } from '@/utils/types';
import { convertNumberToCommaNumber } from '@/utils/converter';

const props = defineProps<{
  list: Array<ListItemProps>;
}>();
</script>

<template>
  <ul
    class="h-fitflex flex-col gap-y-4"
    :key="index"
    v-for="(item, index) in props.list"
  >
    <li
      class="grid grid-cols-3 gap-x-4 items-center justify-between shrink py-2 mx-2 px-4"
    >
      <div class="text-center">
        {{ item.category }}
      </div>
      <div class="text-center">
        {{ item.cycle }}
      </div>
      <div class="text-right">
        {{ convertNumberToCommaNumber(item.earning) }}원
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
