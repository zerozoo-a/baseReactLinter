// const path = require('path');
// const webpack = require('webpack');
// // const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// // const HtmlWebpackPlugin = require('html-webpack-plugin');

// const isDevelopment = process.env.NODE_ENV !== 'development';
// console.log('isProduct?: ', isDevelopment==='product');
// module.exports = {
//   name: 'setVersionTest',
//   mode: isDevelopment ? 'development' : 'production',
//   // mode: isDevelopment ? 'production' : 'development',
//   devtool: isDevelopment ? 'eval' : '',
//   resolve: {
//     extensions: ['.js', '.jsx', 'json'],
//   },
//   entry: './Client.jsx',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: require.resolve('babel-loader'),
//             options: {
//               presets: ['@babel/preset-env', '@babel/preset-react'],
//             },
//           },
//         ],
//       },
//     ],
//   },

//   plugins: [
//     // new CopyWebpackPlugin({patterns: ['index.html']}),
//     isDevelopment && new webpack.HotModuleReplacementPlugin(),
//     isDevelopment && new ReactRefreshWebpackPlugin(),
//   ].filter(Boolean),
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/dist/',
//   },
//   // plugins: [new CopyWebpackPlugin(['index.html'])] ,
//   // plugins: [
//   //   new HtmlWebpackPlugin({
//   //     template: '/index.html',
//   //   }),
//   // ],
//   devServer: {
//     port: 9000,
//     publicPath: '/dist/',
//     hot: true,
//   },
//   // plugins: [
//   //   new CopyWebpackPlugin({
//   //     patterns: ['index.html']
//   //   })
//   // ]
// };




const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

  plugins: [
    new CopyWebpackPlugin({
      patterns:[
        {from:'./index.html', to:'./index.html'},
        {from:'./dist/main.bundle.js', to:'./dist'}
  ]}),
    // new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  devServer: {
    port: 9000,
    publicPath: '/dist/',
    hot: true,
  },
};