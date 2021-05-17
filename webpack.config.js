const path = require('path');
const webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = { 
    mode: "development",//开发模式
    devServer: {
        port:8099,//端口号
        host:'localhost',//本地服务
        open:true,//新窗口打开
        contentBase: './dist'//访问目录
    },
    plugins: [//插件
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:"index.html",
            title:'index',
            inject: true
        }),
    ],
    module: {//模块代码转换
        rules: [  
            {
                test: /\.css$/,   // 正则表达式，表示.css后缀的文件
                use: ['style-loader','css-loader']   // 针对css文件使用的loader，注意有先后顺序，数组项越靠后越先执行
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    entry:{//起点设置（可设置多个）
        app:__dirname+'/src/app.js'//唯一入口文件,__dirname是nodejs里的一个全局变量，它指向的是我们项目的根目录
    },
    output:{//导出设置
        path: path.resolve(__dirname, './dist'),//打包后的文件存放的地方
        filename:'bundle.js'   //打包后输出文件的文件名。多个起点用占位符'[name].js',输出结果为dist/xxx.js、dist/xxxxx.js
    }
};