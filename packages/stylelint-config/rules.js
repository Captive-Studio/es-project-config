const getPackageScope = () => {
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const { name } = require('./package.json');
    const prefixMatch = (name || '').match(/(@\w+)\//);
    const packageScope = prefixMatch ? prefixMatch[1] : undefined;
    return packageScope;
  } catch (error_) {
    // eslint-disable-next-line no-console
    console.warn(error_);

    return undefined;
  }
};
const getPrettierConfig = (/** @type {string} */ moduleName) => {
  try {
    /** @type {import('prettier').Config} */
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const moduleConfig = require(moduleName);
    return moduleConfig;
  } catch {
    return undefined;
  }
};

// Try require '@my-organization/prettier-config'
const getPrettierConfigDefault = () => {
  /** @type {import('prettier').Config} */
  const defaultConfig = {
    trailingComma: 'es5',
  };
  const packageScope = getPackageScope();
  return getPrettierConfig(`${packageScope}/prettier-config`) || defaultConfig;
};

const bemSelector = (/** @type {'any'|'kebabCase'|'pascalCase'} */ selector = 'any') => {
  const kebabCase = '[\\da-z-]+';
  const pascalCase = '[\\da-z]+';
  const any = '[\\da-zA-Z-]+';
  const word = { any, kebabCase, pascalCase }[selector] ?? any;
  return `^[a-z](${word})?(__(${word}-?)+)*(--(${word}-?)+){0,2}$`;
};

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
    'stylelint-config-standard-vue',
  ],
  plugins: ['stylelint-order', 'stylelint-prettier', 'stylelint-scss', 'stylelint-config-rational-order/plugin'],
  rules: {
    'no-descending-specificity': null, // Many false positive https://github.com/stylelint/stylelint/issues/3516
    'prettier/prettier': [true, getPrettierConfigDefault()],
    'selector-class-pattern': [
      bemSelector('any'),
      {
        message: 'Expected class selector to be kebab-case or BEM',
        resolveNestedSelectors: true,
      },
    ],
  },
};
