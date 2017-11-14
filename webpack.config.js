import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebapckPlugin from 'clean-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import webpackDevserver from 'webpack-dev-server';
import forkTSChecker from 'fork-ts-checker-webpack-plugin';
import path from 'path';
import {entry, provide, alias} from './config';

// 输入[html, 引入 css,js]
// js
// css
// 资源
// 输出
// 编译时间  watch Mode, webapck-dev-server, webpack-dev-middleware
module.exports = {
  entry: {
    index: path.resolve(__dirname,'src/app.js')
  },
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
      {
        test: /\.jsx?$/,
        use:['react-loader','react-hot-loader','eslint-loader'],
        options:{
          loaders: {
            ts: 'ts-loader',
            tsx: 'babel-loader!ts-loader'
          },
          happyPackMode: true,
          // 跳过检查
          transpileOnly: true
        },
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader"
      },
      // {
      //   test: /\.tsx?$/,
      //   use: ['babel-loader','ts-loader'],
      //       // options: {
      //       //   transpileOnly: false
      //       // }

      //   // ],
      //   exclude: /node_modules/
      // },
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
      }
    ]
  },
  resolve: {
    extensions: [".js",".tsx",".ts",".scss",".json"],
    alias: alias
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugin: [
    new webpack.DefinePlugin({

    }),
    new CleanWebapckPlugin(['dist']),
    new webpack.ProvidePlugin(provide),
    new HtmlWebpackPlugin({
      title: 'test typescript'
    }),
    new webpack.NamedModulesPlugin(), // 更容易看依赖
    // new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin(),
  ],
  // performance
  // externals
  // context:
  // target: "web",
  // devServer: {

  // }
}
