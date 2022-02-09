const { off, error } = require('./_rule');

module.exports = {
  plugins: ['promise'],
  rules: {
    'promise/always-return': error,
    'promise/avoid-new': off,
    'promise/catch-or-return': error,
    'promise/no-callback-in-promise': off,
    'promise/no-native': off,
    'promise/no-nesting': off,
    'promise/no-new-statics': error,
    'promise/no-promise-in-callback': off,
    'promise/no-return-in-finally': error,
    'promise/no-return-wrap': error,
    'promise/param-names': error,
    'promise/prefer-await-to-callbacks': off, // Too many false positive
    'promise/prefer-await-to-then': off, // Too many false positive
    'promise/valid-params': error,
  },
};
