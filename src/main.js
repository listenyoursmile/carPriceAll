// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Info from './components/Info'
import Detail from './components/Detail'
import './assets/iconfont/iconfont.css'
import './assets/css/reset.css'



//五个主页面路由
import NewCar from './components/NewCar'
import SecondCar from './components/SecondCar'
import FindCar from './components/FindCar'
import HelpCar from './components/HelpCar'
import MyCar from './components/MyCar'


/*                                     分界限                               */
//我的页面路由的接入
import MyCarset from './components/MyCarye/MyCarset'
import MyCarlanding from './components/MyCarye/MyCarlanding'
import MyCarregisiter from './components/MyCarye/MyCarregister'

/*                                     分界限                               */
//import iconFont from './iconfont/iconfont'
require('./assets/iconfont/iconfont.css')

import PageTransition from './components/PageTransition'
import {AjaxPlugin} from 'vux'


//发现车
import Jump from './components/FindCarye/Jump'
import Findactive from './components/FindCarye/Findactive'
import Findactive2 from './components/FindCarye/Findactive2'

//import Activejump from './components/FindCarye/Activejump'
//import Findactivechild from './components/FindCarye/Findactivechild'
//

Vue.use(AjaxPlugin)
Vue.use(VueRouter)
Vue.use(Vuex);



const routes = [
	{
	path:'/',
	name:'PageTransition',
	component:PageTransition,
	children:[
	{
		path: '',
  		component: Info,
		children:[
		{
			path: '',
			name:'NewCar',
		  	component: NewCar
		  	
		},{
			path: '/Detail/:seriesRecordId',
			name:'Detail',
		  	component: Detail
		  	
		},{
			path: '/SecondCar',
			name: 'SecondCar',
			component:SecondCar
			
		},{
			path: '/FindCar',
			name: 'FindCar',
			component:FindCar,
			children:[
			{
			   path: '/FindCar',
			   name:'Jump',
			   component: Jump	
			 },
			 {
			   path: '/FindCar/Findactive',
			   name:'Findactive',
			   component: Findactive,
//			   children:[
//			   {
//			   	   path:'/Findactive',
//			       name:'Activejump',
//			       component: Activejump
//			   },{
//			   	   path: '/FindCar/Findactive/Findactivechild',
//			       name:'Findactivechild',
//			       component: Findactivechild,
//			     }      
//			   ]
			 },{
			   path: '/FindCar/Findactive2',
			   name:'Findactive2',
			   component: Findactive2	
			 }
			]
			
		},{
			path: '/HelpCar',
			name: 'HelpCar',
			component:HelpCar
		},{
			path: '/MyCar',
			name: 'MyCar',
			component:MyCar
		}]
	}]

	},
	{
		path: '/MyCar/MyCarset',
		name:'MyCarset',
		component: MyCarset/*,
		meta:{auth:true}*/
	},
	{
		path: '/MyCar/MyCarlanding',
		name:'MyCarlanding',
		component: MyCarlanding
	},
	{
		path: '/MyCar/MyCarregisiter',
		name:'MyCarregisiter',
		component: MyCarregisiter
	}
]
const router = new VueRouter({
  routes
})
//判断用户是否登陆
router.beforeEach((to,from,next) => {
    if(to.matched.some( m => m.meta.auth)){
        // 对路由进行验证
        if(store.state.isLogin=="100") { // 已经登陆
            next()     // 正常跳转到你设置好的页面
        }else{
            // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
　　 　　　　next({path:'/MyCar/MyCarlanding',query:{ Rurl: to.fullPath} })
 　　　　　} 
　　　　}
    else{
　　　　　　next() 
　　}
})
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
