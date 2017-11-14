let entry = {
  'home': './src/Home',
  'rank': './src/Rank',
  'common':[
    'react',
    'react-router-dom',
    'classnames',
    'SVG',
    'Head',
    'Foot'
  ]

}

let provide = {
  React: 'react',
  ReactRouter: 'react-router-dom',
  classNames: 'classnames',
  SVG: 'SVG',
  Head: 'Head',
  Foot: 'Foot'
};
let alias = {
  SVG: './src/SVG',
  Head: './src/Head',
  Foot: './src/Foot',
};
export {entry, provide, alias};
