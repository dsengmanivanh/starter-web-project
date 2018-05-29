const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
     hot: true
   },
   mode: 'development',
   plugins: [
      new Visualizer({
        filename: './statistics.html'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
      //new BundleAnalyzerPlugin()
      //new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify('development')
     //}),
  ]
});
