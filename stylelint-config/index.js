module.exports = {
  customSyntax: require.resolve("postcss-scss"),
  plugins: ["./rules/use-defined-css-var-when-available/index.js"],
  rules: {
    "@l3vels/l3-ui-style/use-defined-css-var-when-available": true,
  },
};
