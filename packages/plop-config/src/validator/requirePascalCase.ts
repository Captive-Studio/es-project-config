import type { PlopValidator } from './validator.js';

const pascalCaseRegex = /^[A-Z][A-Za-z]*$/u;

export function requirePascalCase(): PlopValidator<unknown> {
  return (promptValue) => (pascalCaseRegex.test(String(promptValue)) ? true : `${promptValue} must be PascalCase`);
}
