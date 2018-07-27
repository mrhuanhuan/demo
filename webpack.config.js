var path=require('path')
//如果需要配置插件,需要在导出的对象上添加plugins节点
var htmlWebpackPlugin=require('html-webpack-plugin')
//导出配置的对象
module.exports={
    //入口文件
    entry : path.join(__dirname,'./src/main.js'),
    //出口文件
    output : {
        path : path.join(__dirname,'./dist'),     //指定输出文件的路径
        filename : 'bundle.js'                    //指定输出文件的名字
    },
    //插入对象节点
    plugins : [
        new htmlWebpackPlugin({
            template : path.join(__dirname,'./src/index.html'),     //指定模板的路径
            filename : 'index.html'                                 //设置生成内存页面的文件名字
        })
    ],
    //配置第三方的loader(载入程序)模块
    module : {
        //第三方模块匹配规则
        rules : [
            //处理css文件的loader
            {test : /\.(css|scss)$/,use : ['style-loader','css-loader','sass-loader']},
            //处理图片文件的loader    这里的limit是限制图片的大小(字节)
            {test : /\.(jpg|png|jpeg|gif|bmp)$/,use : 'url-loader?limit=349950?name=[hash:8]-[name].[ext]'},
            //处理字体图标的loader
            {test : /\.(ttf|eot|svg|woff|woff2)$/,use : 'url-loader'},
            //把Es6中的高级语法转换成浏览器可以识别的低级语言
            {test : /\.js$/,use : 'babel-loader',exclude : /node_modules/},
            //处理vue文件的loader
            {test : /\.vue$/,use : 'vue-loader'}
        ]
    }
}