### 类型
+ let aaa: boolean = true
+ let arr: number [] = [1, 3, 4]  或 let arr: Array<number> = [1, 3, 4]  数组泛型
+ 元组Tuple--联合类型, 表示已知元素数量和类型的数组 let x: [string, number], 如果是访问越界元素 x[3] = 'ni'; x[5].toString(); 都OK; 但不能使用其他类型
+ enum  Shape { line = 1, circle, rectangle } 默认从0开始编号，也可以手动指定，即从1开始了; 也可以全部手动指定 Shape.line 或 Shape[1]
+ Any notsure: any = 3; 可以调用任意的方法, notsure.ifItExists(); list: any[] = [1,true]
+ void 与any相反，表示没有任何类型，当函数没有返回值时  function aa(): void{}, 该类型只能赋予undefined 和 null
+ undefined, null只能赋值给void 与各自；是所有类型的子类
+ nerver 永远不存在的值的类型；用于总是会抛出异常或根本就不会有返回值的函数表达式。是所有类型的子类
+ 类型断言 len: number = (<string>someValue).length 或 len: number = (someValue as string).length

### 接口 interface 对值具有的结构进行类型检查
+ 实现接口时保证包含了接口要求的结构就可以，不必显式的使用implements
+ 可选属性 ?
+ 只读 readonly
let kk: con = {x:1}  赋值一个对象构造一个con，赋值后再也不可能改变
interface con{
  color?: string;
  readonly x: number;
  [propName: string]: any;
  [index: number]: string;
  readonly [index: number]: string;
  Fun(d: Date);
}
function fn(config: con):{color: string, area: number} { }
+ ReadonlyArray<T>类型  let ro: ReadonlyArray<number> = [1,2,3]；不可再被赋值，也不可赋值到一个普通数组；但可用类型断言重写 a = ro as number[].
+ 属性检查，存在一个未被引用的属性时会报错。绕开类型检查用断言 或 字符串索引签名 或将params对象赋值给一个变量；fn(params) as con
+ 可索引类型：字符串索引签名, let
+ 对象可以描述对象拥有的各种各样的外形，普通对象、函数；
+ 给接口定义一个调用签名 interface Func{ (aa: string, bb: string): boolean;  }, 只有参数列表和返回值的类型，使用 let cc: Func; cc = function(dd: string, ee: string){ return true;}   函数参数名与接口定义的不必相匹配。
+ 类类型，实现接口 class AA implements con{ }

### 关键字 public


### js支持protected, static, interface



### 编译typescripts
+ tsconfig.json为Typescript项目根目录，指定根文件和编译选项



### devtool
+ inline-source-map

### 动态编译
+ webpack --watch
+ webpack-dev-server  --open; 配置：devServer:{contentBase: 'path', hot: true} + webpack.HotModuleReplacementPlugin
+ webpack-dev-middleware  express


### 编译配置文件用ES6
- babelrc配置


### typescript配置
"extends": "path" 配置文件地址
"allowJs": true,
"typeRoots": ["./typings"], 只有下面的包才会被包含进来
"types": ["node", "lodash"], 只有被列出来的才会被包含进来, 禁用自动引入@type下的包
"types": [
      "classnames",
      "react",
      "react-dom",
      "react-router-dom",
      "react-native"
    ]
npm install --save-dev @types/lodash 安装需要用的库
"files":[

],
"include":[

],
### 提高performace
+ loader 加include, 加resolving.modules, resolve.extensions,..mainFiles, ..descriptionFiles
+ 不用symlinks, resolve.cacheWithContext: false
+ dllplugin 单独编译
+ CommonsChunkPlugin 异步
+ thread-lader  cache-lader
+ map
+ 内存编译
+ 生产环境--parallel-webpack
+ babel
+ typescript 类型检查

### externals

### variable  env.NODE_ENV=loacal 或 evn.production
module.exports = env=>{ return {配置}}

### 新配置结构
module:{
  rules: [
    {
      enforce:'pre',
      include,
      exclude
      test,
      use: [
        {
          loader,
          options
        }
      ],
    或 use: ['loader','loader']
    或 loader: "my-loader"
      use: ExtractTextPlugin.extrct({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: Object.assign(
            {},
            postcssConfig,
            { sourceMap: true }
          ),
        }]
      })
    }
  ]
}


### babel配置
+ presets 预设
- es2015
+ plugins 插件
