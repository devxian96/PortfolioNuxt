module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/first-attribute-linebreak': 'off',
    'vue/no-reserved-props': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
