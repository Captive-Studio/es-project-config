import * as Variables from './variables.js';

export const template = `
import { describe, it, expect } from 'vitest';
import { {{ ${Variables.componentName} }} as Component } from './{{ ${Variables.componentName} }}.js';

describe(Component.name, () => {
  it('has a name', () => {
    expect(Component.name).toEqual('{{ ${Variables.componentName} }}');
  });
});
`.slice(1);
