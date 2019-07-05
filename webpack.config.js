const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin
    new Dotenv()({
      title: 'Doctor Locator',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: "eslint-loader"
       },
       {
         test: /\.(png|jpg|gif)$/,
         loader: 'url-loader'
       },
       // new rule
       {
         test: /\.js$/,
         exclude: [
           /node_modules/,
           /spec/
         ],
         loader: "babel-loader",
         options: {
           presets: ['es2015']
         }
       }
     ]
   }
 };
