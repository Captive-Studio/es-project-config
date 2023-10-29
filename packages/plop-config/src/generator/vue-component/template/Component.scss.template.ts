// Component Stylesheet
// BEM Convention

import * as Variables from './variables.js';

export const template = `
.{{ ${Variables.componentName} }} {
  background-color: red;

  // Sub component
  &__Content {
    background-color: white;
  }

  // Component state
  &--disabled {
    opacity: 0.5;
  }
}
`.slice(1);
