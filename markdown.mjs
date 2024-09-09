/* eslint-disable import/no-extraneous-dependencies */
import markdownMagic from 'markdown-magic';
import markdownPackageJSON from 'markdown-magic-package-json';
import markdownList from 'markdown-magic-subpackage-list';

markdownMagic([`*.md`, `docs/**/*.md`, '!node_modules/**', '!packages/**'], {
  transforms: {
    PKG_JSON: markdownPackageJSON,
    SUB_PACKAGE_LIST: markdownList,
  },
});
