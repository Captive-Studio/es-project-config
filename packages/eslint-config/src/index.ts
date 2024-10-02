import type eslint from 'eslint';
import { ESLintConfig } from '@w5s/dev';
import ignoreConfig from './rules/ignore.js';
import cypressConfig from './cypress.js';
import esConfig from './es.js';
import tsConfig from './ts.js';
import jestConfig from './jest.js';
import jsonConfig from './json.js';
import vueConfig from './vue.js';
import ymlConfig from './yml.js';

function tryResolve(name: string) {
  try {
    require.resolve(name);
    return true;
  } catch {
    return false;
  }
}

const config: eslint.Linter.Config = ESLintConfig.concat(
  ignoreConfig,
  esConfig,
  tryResolve('typescript') ? tsConfig : {},
  jestConfig,
  jsonConfig,
  ymlConfig,
  tryResolve('cypress') ? cypressConfig : {},
  tryResolve('vue') ? vueConfig : {},
  {
    root: true,
  },
);

export = config;
