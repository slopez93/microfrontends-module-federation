const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const fs = require("fs");
const jsyaml = require("js-yaml");

const environment = jsyaml.load(fs.readFileSync("./env.yml", "utf8"));

const prodConfig = (env) => {
  return {
    mode: "production",
    output: {
      filename: "[name].[contenthash].js",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "frontendAccomodation",
        remotes: {
          frontendAccomodation: `frontendAccomodation@${
            environment[env.STAGE].FRONTEND_ACCOMODATION_CLOUD_FRONT
          }/remoteEntry.js`,
        },
      }),
    ],
  };
};

module.exports = (env) => merge(commonConfig, prodConfig(env));
