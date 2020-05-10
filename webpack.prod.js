const path = require("path");
const HTMLwebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const minicssextractplugin = require("mini-css-extract-plugin");
const terserplugin = require("terser-webpack-plugin");
var optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  devtool: "none ",
  mode: "production",
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new minicssextractplugin({
      filename: "styler.[chunkhash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [minicssextractplugin.loader, "css-loader"]
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        loader: [minicssextractplugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 20000
            }
          },
          "image-webpack-loader"
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new terserplugin(),
      new optimizeCssAssetsPlugin(),
      new HTMLwebpackplugin({
        template: "./index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  }
});
