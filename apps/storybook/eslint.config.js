import { nextJsConfig } from "@poly/eslint-config/next-js"

/** @type {import("eslint").Linter.Config} */
const eslintConfig = [
  ...nextJsConfig,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "storybook-static/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
]

export default eslintConfig
