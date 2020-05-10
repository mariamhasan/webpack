module.exports = {
  entry: { index: "./App/index.js", alert: "./App/alert.js" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  }
};
