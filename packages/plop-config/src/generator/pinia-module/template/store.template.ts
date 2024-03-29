import * as Variables from './variables.js';

export const template = `
import { defineStore } from 'pinia';

export const use{{pascalCase ${Variables.storeName} }}Store = defineStore('{{ ${Variables.storeName} }}', () => {
  // Data

  // Actions
  const todo = () => {};

  // Exports
  return {
    todo,
  };
});
`.slice(1);
