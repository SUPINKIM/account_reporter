<script lang="ts" setup>
import { ButtonType } from '../../utils/types';

interface IButtonProps {
  types?: ButtonType;
  color?: string;
  className?: string;
  text?: string;
}

const props = withDefaults(defineProps<IButtonProps>(), {
  types: 'primary',
  color: 'bg-default',
  text: '확인',
});

const emit = defineEmits(['clickButton']);
</script>

<template>
  <div
    class="w-24 h-12 rounded-md text-white flex justify-center items-center cursor-pointer"
    :class="[props.color, props.className]"
    @click="emit('clickButton')"
  >
    {{ props.text }}
  </div>
</template>

<style scoped></style>
