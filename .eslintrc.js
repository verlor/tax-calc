module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "jsx-a11y", "react-hooks"],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        json: "never",
        js: "never",
      },
    ],
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
