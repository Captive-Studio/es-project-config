import * as Variables from './variables.js';

export const template = `
import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { use{{pascalCase ${Variables.storeName} }}Store as useSubjectStore } from './store.js';

describe('store/{{ ${Variables.storeName} }}', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('()', () => {
    it('constructs an object', async () => {
      const store = useSubjectStore();
      expect(store).toBeTypeOf('object');
    });
  });

  describe('#myMethod', () => {
    it('is dummy test', async () => {
      expect(true).toBe(true);
    });
  });
});
`.slice(1);
