const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry:  "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "shooks.js",
    library: "shooks",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node-modules/,
        loader: "ts-loader",
      }
    ],
  },
  resolve: {
    extensions: [".js", "json", ".tsx", ".ts", ".png"],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin(),
  ],
  devServer: {},
};
