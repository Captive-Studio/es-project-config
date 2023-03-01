import type { AdvancedCSpellSettings } from '@cspell/cspell-types';
import cSpellSettings from '@w5s/cspell-config/lib/index.js';

const toArray = <T>(value: T | T[] | undefined) => (Array.isArray(value) ? value : value == null ? [] : [value]);
const defaultSettings = cSpellSettings;
const settings: AdvancedCSpellSettings = {
  ...defaultSettings,
  name: 'Captive default settings .js',
  id: 'captive-default-js',
  language: 'en,fr',
  description: 'Default cspell configuration.',
  dictionaryDefinitions: [
    // ...toArray(defaultSettings.dictionaryDefinitions),
    {
      addWords: false,
      name: 'captive-filetypes',
      path: '../dict/filetypes.txt',
      description: 'Additional file types',
    },
    {
      addWords: false,
      name: 'captive-names',
      path: '../dict/names.txt',
      description: 'Known names',
    },
  ],
  dictionaries: [...toArray(defaultSettings.dictionaries), 'captive-filetypes', 'captive-names'],
  ignoreWords: [...toArray(defaultSettings.ignoreWords)],
  import: [
    ...toArray(defaultSettings.import),
    '@cspell/dict-fr-fr/cspell-ext.json',
    '@w5s/cspell-config/cspell-ext.json',
  ],
  ignorePaths: [...toArray(defaultSettings.ignorePaths)],
  languageSettings: [...toArray(defaultSettings.languageSettings)],
};

export = settings;
