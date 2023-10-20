import type { PlopValidator } from './validator.js';

export function requireNotEmpty(): PlopValidator<unknown> {
  return (promptValue) => (/.+/u.test(String(promptValue)) ? true : `${promptValue} must not empty`);
}
