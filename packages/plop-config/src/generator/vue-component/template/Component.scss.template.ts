// Component Stylesheet
// BEM Convention

import * as Variables from './variables.js';

export const template = `
.{{ ${Variables.componentName} }} {
  // Modifier
  // &--disabled {}

  // Element
  // &__Content {}
}
`.slice(1);
