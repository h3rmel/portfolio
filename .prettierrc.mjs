/** @type {import("prettier").Config} */
export default {
  printWidth: 90,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: "all",
  arrowParens: "always",
  semi: true,
  endOfLine: "auto",
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports"
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ],
  importOrder: [
    "",
    "^react$",
    "",
    "^astro(.*)$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    ".css$",
    "",
    "^[.]",
    "",
    ".css$",
    "",
  ],
  importOrderCaseSensitive: false,
};
