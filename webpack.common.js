const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    libraryTarget: "var",
    library: "Client"
  },
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html"
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true
    })
  ]
};
