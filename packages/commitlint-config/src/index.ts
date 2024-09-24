/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/naming-convention */
import defaultConfig from '@w5s/commitlint-config';
import { RuleConfigSeverity } from '@commitlint/types';

const config: typeof defaultConfig = {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,
    'header-max-length': [RuleConfigSeverity.Error, 'always', 100],
    'body-max-line-length': [RuleConfigSeverity.Disabled, 'always', Number.POSITIVE_INFINITY],
    'footer-max-line-length': [RuleConfigSeverity.Disabled, 'always', Number.POSITIVE_INFINITY],
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
