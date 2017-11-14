import webpack from 'webpack';
import webpackDevserver from 'webpack-dev-server';
import webpackConfig from './webpack.config';
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
  port: 3002
}
webpackDevserver.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevserver(compiler, options);
// server.listen(3002, 'localhost',()=>{
//   console.log('服务启动，port 3002')
// })

