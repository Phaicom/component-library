module.exports = {
  extends: ['@hannoeru', 'plugin:markdown/recommended'],
  overrides: [
    {
      files: ['**/*.md/**'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'jsonc/no-dupe-keys': 'off',
      },
    },
  ],
  rules: {
    'vue/no-mutating-props': 'off',
  },
}
