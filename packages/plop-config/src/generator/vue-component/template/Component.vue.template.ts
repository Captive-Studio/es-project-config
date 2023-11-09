import * as Variables from './variables.js';

export const template = `
<script lang="ts" setup>
import { defineOptions } from 'vue';
import './{{ ${Variables.componentName} }}.scss';

// Name and options
const componentName = '{{ ${Variables.componentName} }}';

defineOptions({
  name: componentName,
});

// Component properties
export interface {{ ${Variables.componentName} }}Props {
  dark?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<{{ ${Variables.componentName} }}Props>(), {
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
