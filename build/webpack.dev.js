const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webath ='/incopat4_war_exploded'
module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(['dist']),
     new CopyWebpackPlugin([
      {
          from: 'css',
          to:'../dist/css'
      },
      ], {
      ignore: [],
      copyUnmodified: true,
      debug:"debug"
     }),
     
     new CopyWebpackPlugin([
      {
          from: 'libs',
          to:'../dist/libs'
      },
      ], {
      ignore: [],
      copyUnmodified: true,
      debug:"debug"
     }),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'incopat.demo',
    }),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: '[name].[contenthash].css',
    //   // chunkFilename: devMode ? '[id].[hash].css' : '[id].css',
    // }),
  ],
  output: {
    filename: 'demo.min.js',
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   host: 'localhost',
  //   contentBase: '../dist',
  // },
  devServer: {
    contentBase: './dist',
    host: 'localhost', // 默认是localhost
    port: 3001, // 端口
    open: true, // 自动打开浏览器
    hot: true, // 开启热更新
    disableHostCheck: true,
    contentBase: '../dist',
    proxy: {
          '/demoPath/demo': {
            target: 'http://localhost:8080',
            // pathRewrite: {'^/getPatentByPN2' : '/solrResult/getPatentByPN2'},
            changeOrigin: true, // target是域名的话，需要这个参数，
            secure: false, // 设置支持https协议的代理
        },
      }
  }
});
