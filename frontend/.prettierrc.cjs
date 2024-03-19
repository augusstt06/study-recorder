module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 100,
  endOfLine: "auto",
  useTabs: false,
  semi: true,
  jsxSingleQuote: true,
  arrowParens: "always",
  plugins: [],
  importOrder: [
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",

    "^~/api/(.*)$",
    "^~/hooks/(.*)$",
    "^~/components/(.*)$",
    "^~/utils/(.*)$",

    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
