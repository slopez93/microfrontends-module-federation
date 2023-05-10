const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:8080/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "frontendAccomodation",
      remotes: {
        frontendAccomodation: "frontendAccomodation@http://localhost:8081/remoteEntry.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
