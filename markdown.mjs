/* eslint-disable import/no-extraneous-dependencies */
// import path from 'node:path';
import markdownMagic from 'markdown-magic';
import markdownPackageJSON from 'markdown-magic-package-json';
import markdownList from 'markdown-magic-subpackage-list';

// const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(['**/*.md', '!node_modules/**', '!packages/**'], {
  transforms: {
    PKG_JSON: markdownPackageJSON,
    SUB_PACKAGE_LIST: markdownList,
  },
});
