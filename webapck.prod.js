import merge from 'webpack-merge';
import base from './webpack.config';
module.exports = merge(base, {
  plugins: [
    new UglifyJSPlugin({
      compress:{
        warnings: true
      },
      // minimize: true
      sourceMap: true
    })
  ]
});
