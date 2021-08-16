const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');
const deps = require('./package.json').dependencies;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe',
      filename: 'remoteEntry.js',
      exposes: {
        "./mfeApp.js": "./src/bootstrap.js"
      },
      shared: deps,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};

module.exports = merge(commonConfig, devConfig);