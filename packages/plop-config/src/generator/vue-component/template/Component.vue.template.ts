import * as Variables from './variables.js';

export const template = `
<script lang="ts" setup>
import { defineOptions, defineProps, withDefaults } from 'vue';
import './{{ ${Variables.componentName} }}.scss';

const componentName = '{{ ${Variables.componentName} }}';

defineOptions({
  name: componentName,
});

withDefaults(
  defineProps<{
    dark?: boolean;
  }>(),
  {
    dark: false,
  }
);
</script>

<template>
  <div
    :class="[
      componentName,
      dark ? \`\${componentName}--dark\` : \`\${componentName}--light\`,
    ]"
  >
    <slot></slot>
  </div>
</template>
`.slice(1);
