import type { AdvancedCSpellSettings } from '@cspell/cspell-types';
import cSpellSettings from '@w5s/cspell-config/dist/index.js';

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
    {
      addWords: false,
      name: 'captive-ruby',
      path: '../dict/ruby.txt',
      description: 'Additional ruby words',
    },
    {
      addWords: false,
      name: 'captive-fr',
      path: '../dict/fr.txt',
      description: 'Additional french words',
    },
  ],
  dictionaries: [...toArray(defaultSettings.dictionaries), 'captive-filetypes', 'captive-names'],
  ignoreWords: [...toArray(defaultSettings.ignoreWords)],
  import: [
    ...toArray(defaultSettings.import),
    '@cspell/dict-bash/cspell-ext.json',
    '@cspell/dict-fr-fr/cspell-ext.json',
    '@cspell/dict-ruby/cspell-ext.json',
    '@w5s/cspell-config/cspell-ext.json',
  ],
  ignorePaths: [...toArray(defaultSettings.ignorePaths), '**/Gemfile', '**/*.gemspec', '**/bin/**'],
  languageSettings: [
    ...toArray(defaultSettings.languageSettings),
    {
      languageId: 'ruby',
      locale: '*',
      includeRegExpList: [],
      ignoreRegExpList: [],
      patterns: [],
      dictionaries: ['captive-ruby'],
      dictionaryDefinitions: [],
    },
    {
      languageId: '*',
      locale: 'fr,fr-fr',
      caseSensitive: true,
      includeRegExpList: [],
      ignoreRegExpList: [],
      patterns: [],
      dictionaries: ['captive-fr'],
      dictionaryDefinitions: [],
    },
  ],
};

export = settings;
