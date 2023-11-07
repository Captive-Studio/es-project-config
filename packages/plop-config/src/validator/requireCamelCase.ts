import type { PlopValidator } from './validator.js';

const camelCaseRegex = /^[a-z][A-Za-z]*$/u;

export function requireCamelCase(): PlopValidator<unknown> {
  return (promptValue) => (camelCaseRegex.test(String(promptValue)) ? true : `${promptValue} must be camelCase`);
}
