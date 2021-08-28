module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": ["@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    ["component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]]
}
