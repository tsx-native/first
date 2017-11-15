import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.config';
const app = express();

const hotclient = ['webpack-hot-middleware/client?noInfo=true&reload=true']
const entry = webpackConfig.entry;
Object.keys(entry).forEach((name) => {
  const value = entry[name]
  if (Array.isArray(value)) {
      value.unshift(...hotclient)
  } else {
      entry[name] = [...hotclient, value]
  }
})


const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler,{
  serverSideRender: true,
  publicPath: compiler.options.output.publicPath,
  noInfo: true,
  quiet: false,
  stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      children: false
  }
}));
app.use(webpackHotMiddleware(compiler));

app.listen('3003', ()=>{
  console.log('服务已启动')
})
