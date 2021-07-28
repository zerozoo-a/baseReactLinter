const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
console.log('isDev?: ', isDevelopment);
module.exports = {
  name: 'setVersionTest',
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment && 'eval',
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
  },
  entry: './Client.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/public/'),
    publicPath: './public/',
  },
  devServer: {
    port: 9000,
    open: true,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './index.html',
      publicPath: './public/',
    }),
    new CleanWebpackPlugin(),
  ],
};
