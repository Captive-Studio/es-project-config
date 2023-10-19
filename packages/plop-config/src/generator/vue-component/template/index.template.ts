import * as Variables from './variables.js';

export const template = `
export { default as {{ ${Variables.componentName} }} } from './{{ ${Variables.componentName} }}.vue';
`.slice(1);
