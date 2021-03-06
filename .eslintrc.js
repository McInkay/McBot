module.exports = {
  rules: {
    indent: [0, 4],
    quotes: [0, 'single'],
    'linebreak-style': [2, 'unix'],
    "semi": [
      2,
      'always'
    ],
    'no-console': 0,
    'no-control-regex': 0
  },
  env: {
    es6: true,
    node: true
  },
  extends: 'eslint:recommended'
};
