const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
console.log('isDev?: ',isDevelopment);
module.exports = {
  name: 'setVersionTest',
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment && 'eval' ,
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

  // plugins: [
  //   isDevelopment && new webpack.HotModuleReplacementPlugin(),
  //   isDevelopment && new ReactRefreshWebpackPlugin(),
  // ].filter(Boolean),
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ],
  plugins:[
     new CopyWebpackPlugin({
      patterns:[
        {from:'./index.html', to:'../index.html'},
      ]
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/dist'),
    publicPath: '/dist/dist',
  },
  devServer: {
    port: 9000,
    publicPath: '/dist/',
    hot: true,
  },
};