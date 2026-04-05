import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import boundaries from "eslint-plugin-boundaries";
import unusedImports from "eslint-plugin-unused-imports";
import process from "node:process";

const isProd = process.env.NODE_ENV === "production";

export default [
  {
    ignores: ["dist", "node_modules", "build"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // ✅ TypeScript setup
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },

  // ✅ Main rules
  {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
      react,
      "react-hooks": hooks,
      boundaries,
      "unused-imports": unusedImports,
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
      "boundaries/elements": [
        { type: "components", pattern: "src/components/**" },
        { type: "pages", pattern: "src/pages/**" },
        { type: "features", pattern: "src/features/**" },
        { type: "hooks", pattern: "src/hooks/**" },
        { type: "services", pattern: "src/**/services/**" },
        { type: "api", pattern: "src/**/api/**" },
        { type: "config", pattern: "src/config/**" },
        { type: "utils", pattern: "src/utils/**" },
        { type: "layouts", pattern: "src/layouts/**" },
      ],
    },

    rules: {
      // 🚫 Logging
      "no-console": [
        isProd ? "error" : "warn",
        { allow: ["warn", "error"] },
      ],

      "no-restricted-syntax": [
        "error",
        {
          selector:
            "MemberExpression[object.name='console'][property.name='log']",
          message: "Use logger instead of console.log",
        },
      ],

      // 🧹 Clean code
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      // ⚛️ React
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // 🧠 Architecture (optional enable later)
      /*
      "boundaries/element-types": [
        "error",
        {
          default: "allow",
          rules: [
            { from: "components", disallow: ["services", "config", "api"] },
            { from: "pages", disallow: ["services", "api"] },
            { from: "hooks", allow: ["services", "utils", "config", "api"] },
            { from: "services", disallow: ["components", "pages", "layouts"] },
            { from: "api", disallow: ["components", "pages", "layouts"] },
            { from: "config", disallow: ["components", "pages"] },
            { from: "layouts", disallow: ["services"] },
          ],
        },
      ],
      */
    },
  },

  // ✅ Override ONLY for logger (correct way)
  {
    files: ["src/utils/logger.ts"],
    rules: {
      "no-console": "off",
      "no-restricted-syntax": "off",
    },
  },
];