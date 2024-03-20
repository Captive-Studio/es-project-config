import type { PlopValidator } from './validator.js';

export function requireURL(): PlopValidator<unknown> {
  return (promptValue) => {
    if (promptValue == null || promptValue === '') {
      return true;
    }
    try {
      // eslint-disable-next-line no-new
      new URL(String(promptValue));
      return true;
    } catch {
      return `${promptValue} must not a valid URL`;
    }
  };
}
