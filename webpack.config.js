const path = require('path');

module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: "./webpack/entry.js",
  output: {
    path: path.resolve(__dirname, 'src/js/'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
