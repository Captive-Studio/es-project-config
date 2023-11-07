import * as Variables from './variables.js';

export const template = `
import { describe, it, expect } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { use{{pascalCase ${Variables.storeName} }}Store } from './store.js';

describe('store/{{ ${Variables.storeName} }}', () => {
  describe('#myMethod', () => {
    it('is dummy test', async () => {
      expect(true).toBe(true);
    });
  });
});
`.slice(1);
