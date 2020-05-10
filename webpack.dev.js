const path = require("path");
const HTMLwebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "source-map",
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLwebpackplugin({
      template: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputpath: "assets/imgs",
            esModule: false
          }
        }
      }
    ]
  }
});
