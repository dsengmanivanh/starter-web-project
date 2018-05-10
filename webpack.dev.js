const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
   plugins: [
      new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
     }),
     new Visualizer({
        filename: './statistics.html'
      })
      //new BundleAnalyzerPlugin()
   ]
});
