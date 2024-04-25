import * as Variables from './variables.js';

export const template = `
<script lang="ts" setup>
import { onMounted } from 'vue';
import './{{ ${Variables.componentName} }}.{{ styleSheet }}';

// Name and options
const componentName = '{{ ${Variables.componentName} }}';

defineOptions({
  name: componentName,
});

// Component props
export interface {{ ${Variables.componentName} }}Props {
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<{{ ${Variables.componentName} }}Props>(), {
  // Default values
});

// State (ref, computed, ...)

// Lifecycle (onMounted, onIonViewWillEnter, ...)
onMounted(() => {

});

</script>

<template>
  <div :class="[componentName]">
    <div :class="[componentName + '__Content']">TODO</div>
    <slot></slot>
  </div>
</template>
`.slice(1);
