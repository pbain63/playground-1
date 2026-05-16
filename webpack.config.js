import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack"; // to access built-in plugins

export default {
  mode: "production",
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
