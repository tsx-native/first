import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebapckPlugin from 'clean-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import webpackDevserver from 'webpack-dev-server';
import forkTSChecker from 'fork-ts-checker-webpack-plugin';
import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from 'path';
import {entry, provide, alias} from './config';

// 输入[html, 引入 css,js]
// js
// css
// 资源
// 输出
// 编译时间  watch Mode, webapck-dev-server, webpack-dev-middleware
module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js'
  },
  devtool: "source-map",
  // devServer: {
  //   contentBase: './dist',
  //   hot: true,
  //   host: 'localhost',
  //   port: 3002,
  //   openPage: '/index',
  //   open: true
  // },
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   options: {
      //     presets: ['babel-preset-react','babel-preset-env']
      //   },
      // },
      // {
      //   test: /\.tsx?$/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: babelConfig,
      //     },
      //     {
      //       loader: 'ts-loader',
      //       options: {
      //         transpileOnly: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: ["source-map-loader","babel-loader",]
      },
      {
        test: /\.jsx?$/,
        use:['react-loader','react-hot-loader','eslint-loader','babel-loader'],
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["awesome-typescript-loader",'ts-loader','babel-lader']
      },
      {
        test: /\.scss$/,
        use: ['scss-loader','style-loader','css-loader'],
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
            runtimeCompat: true,
        }
      }
    ]
  },
  resolve: {
    extensions: ["",".js",".tsx",".ts",".scss",".json"],
    alias: alias
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },
  plugin: [
    new webpack.DefinePlugin({

    }),
    new CleanWebapckPlugin(['dist']),
    new webpack.ProvidePlugin(provide),
    new HtmlWebpackPlugin({
      title: 'test typescript',
      filename: 'index.html'
    }),
    new webpack.NamedModulesPlugin(), // 更容易看依赖
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common']
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),  // HRM提供者，hot与服务通信，局部更新应用模块的能力
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css'),
    // new ManifestPlugin(),
  ],
  // performance
  // externals
  // context:
  // target: "web",
  // devServer: {

  // }
}
