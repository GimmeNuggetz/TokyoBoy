var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./pizzaface.js",
  output: {
    path: path.join(__dirname, 'assets', 'lib'),
    filename: "bundle.js"
  },

  devtool: 'source-map',
  resolve: {
    extensions: [".js"]
  }
};
