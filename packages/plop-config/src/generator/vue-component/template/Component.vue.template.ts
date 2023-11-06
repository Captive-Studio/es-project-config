import * as Variables from './variables.js';

export const template = `
<script lang="ts" setup>
import { defineOptions, withDefaults } from 'vue';
import './{{ ${Variables.componentName} }}.scss';

const componentName = '{{ ${Variables.componentName} }}';

defineOptions({
  name: componentName,
});

interface Props {
  dark?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  dark: false,
});
</script>

<template>
  <div :class="[componentName]">
    <div :class="[componentName + '__Content']">TODO</div>
    <slot></slot>
  </div>
</template>
`.slice(1);
