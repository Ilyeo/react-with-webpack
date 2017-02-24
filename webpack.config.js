// const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devServer: {
    open: true,
    contentBase: __dirname + '/public'
  }
};

module.exports = config;
