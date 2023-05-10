const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name][contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "frontendAccomodation",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/bootstrap",
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
