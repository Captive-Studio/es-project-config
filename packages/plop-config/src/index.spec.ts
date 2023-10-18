import { describe, it, expect } from 'vitest';
import * as Module from './index.js';

describe('Public api', () => {
  it('contains keys', () =>
    expect(Module).toMatchObject({
      default: expect.any(Function),
      plopPlugin: expect.any(Function),
    }));
});
