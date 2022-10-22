/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:vue-scoped-css/vue3-recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: { "vue/multi-word-component-names": "off" },
};
