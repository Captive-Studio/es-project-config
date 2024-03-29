import { composeValidators, requireNotEmpty, requirePascalCase } from '../validator/index.js';

export const componentNamePrompt = {
  type: 'input',
  message: 'Component name ({{Prefix}}{{Suffix}}) :',
  suffix: [
    '',
    '  - Prefix = any PascalCase string',
    '  - Suffix = name of the root component (e.g. Button, Card, etc)',
    '',
    '  ✓ GOOD : HelpButton, MyComponentCard',
    '  ✗ BAD : help-button, helpButton',
    '',
  ].join('\n'),
  validate: composeValidators(requireNotEmpty(), requirePascalCase()),
};
