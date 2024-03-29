import * as Variables from './variables.js';

export const template = `
export * from './{{ ${Variables.componentName} }}.js';
`.slice(1);
