const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
 entry: {
   page1: './src/js/page1.js',
   another: './src/js/another-module.js',
   index: './src/js/index.js'
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
      chunks: ['']
    }),
    new HtmlWebpackPlugin({
      filename: 'page1.html',
      title: 'Page 1',
      chunks: ['page1','another']
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
     }
   ]
  }
};