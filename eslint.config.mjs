import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import { flatConfigs as importConfig } from 'eslint-plugin-import-x';

const { configs: reactConfig } = reactPlugin;
const { configs: reactHooksConfig } = reactHooksPlugin;

export default [
  js.configs.recommended,
  importConfig.recommended,
  importConfig.react,
  reactConfig.flat.recommended,
  reactHooksConfig.flat['recommended-latest'],
  {
    languageOptions: {
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false
      }
    },
    rules: {
      'react/jsx-uses-react': 0,
      'react/jsx-sort-props': 2,
      'react/react-in-jsx-scope': 0
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import-x/resolver': {
        node: {
          paths: ['./src/']
        }
      }
    }
  },
  {
    files: ['gatsby-*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser
      }
    }
  },
  prettierPlugin
];
