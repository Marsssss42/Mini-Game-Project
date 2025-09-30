module.exports = {
  env: {
    browser: true, // Enables browser global variables
    es2021: true,  // Enables ES2021 syntax
    node: true,    // Enables Node.js global variables
  },
  extends: [
    'eslint:recommended',         // Basic ESLint recommended rules
    'plugin:react/recommended',   // Recommended rules for React
    'prettier'                    // MUST BE LAST: Disables rules that conflict with Prettier
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,                  // Allow parsing of JSX
    },
    ecmaVersion: 'latest',        // Use the latest ECMAScript version
    sourceType: 'module',         // Allow the use of imports
  },
  plugins: [
    'react'                       // The React plugin
  ],
  rules: {
    // You can add or override rules here. For example:
    // 'react/prop-types': 'off' // Turns off the rule requiring prop types
  },
  settings: {
    react: {
      version: 'detect',          // Automatically detect the React version
    },
  },
};