module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    indent: ['error', 4],
    'space-before-function-paren': ['error', 'never'],
    'key-spacing': ['error', {
        beforeColon: true,
        afterColon: true,
        mode: 'minimum',
        align: {
            beforeColon: true,
            afterColon: true,
            on: 'colon'
        }
    }],
    semi: ['error', 'always'],
    'keyword-spacing': ['error', {
        before: true,
        after: true
    }],
    'brace-style': ['error', 'stroustrup']
  },
}
