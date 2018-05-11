const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require("glob");

module.exports = {
 entry: {
   //page1: './src/js/page1.js',
   //another: './src/js/another-module.js',
   page1: glob.sync("./src/js/*.js"),
   index: './src/js/index.js',
   app:'./src/components/App.js',
   faq: glob.sync("./src/components/faq/*.js")
 },
 output: {
   filename: '[name].[chunkhash].js',
   path: path.resolve(__dirname, 'dist')
 },
 plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'page1.html',
      title: 'Page 1',
      chunks: ['page1']
    }),
    new HtmlWebpackPlugin({
      template: "./src/app.html",
      filename: "./app.html",
      chunks: ['app','faq']
    })
 ],
 module: {
   rules: [
     {
       test: /\.scss$/,
       use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: ['css-loader', 'sass-loader']
       })
     },
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader"
       }
     }
   ]
  }
};
