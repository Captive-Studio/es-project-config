// import * as Variables from './variables.js';

export const template = `
<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';
import { IonIcon } from '@ionic/vue';

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
  <ion-icon
    :class="dark ? 'Example--dark' : 'Example--light'"
    class="ExampleButton"
  />
</template>
`.slice(1);
