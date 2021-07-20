const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/main.js'), //入口文件
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
    	template: path.join(__dirname, './src/index.html'), //指定模版文件路径
    	filename: 'index.html' //设置生成的内存页面名称
    }),
    new VueLoaderPlugin()
  ],
  module: { //配置所有第三方loader模块
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      { 
      	test: /\.(jpg|png|gif|bmp|jpeg)$/, 
      	use: [{
            loader: 'url-loader',
            // loader: 'file-loader',
            options: {
                esModule: false, // 这里设置为false,4.x版本file-loader会将src url属性图片打包成object无法显示
                name: '[name].[ext]',
                limit: 10240
            }
        }]
      }, // 处理 图片路径的 loader
      // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
      { 
        test: /\.(ttf|eot|svg|woff|woff2)$/, 
        use: 'url-loader' 
      }, // 处理 字体文件的 loader 
      { 
        test: /\.js$/, use: 'babel-loader', 
        exclude: /node_modules/ 
      }, // 配置 Babel 来转换高级的ES语法
      {
        test: /\.vue$/, 
        use: [{
            loader: 'url-loader',
            // loader: 'file-loader',
            options: {
                esModule: false
            }
        }]
      }, //处理.vue文件 
    ],
  },
  resolve: {
    alias: { //修改导入vue为全版，非run-time only版本
      //"vue$": "vue/dist/vue.js"
    }
  }
};