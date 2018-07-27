//入口文件
//导入vue的包
import Vue from 'vue'
//导入App.vue总组件
import app from './App.vue'
//导入router
import router from './router.js'
//全部导入mint-ui  要使用mint-ui中的懒加载的图标需要全部导入mint-ui,局部导入不行
import Mint from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style.css'
//导入MUI的样式
import './lib/mui/css/mui.css'
var vm=new Vue({
    el : "#app",
    render : c=>c(app),
    router
})