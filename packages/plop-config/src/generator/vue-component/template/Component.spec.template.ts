import * as Variables from './variables.js';

export const template = `
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Component from './{{ ${Variables.componentName} }}.vue';

describe(Component.name, () => {
  it('has a name', () => {
    expect(Component.name).toEqual('{{ ${Variables.componentName} }}');
  });
  it('renders properly', () => {
    const wrapper = mount(Component);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders html', () => {
    const wrapper = mount(Component);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
`.slice(1);
