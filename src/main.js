// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'n-zepto'
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


import MycarCommunity from './components/MyCarye/MycarCommunity'
import MycarSign from './components/MyCarye/MycarSign'
import MycarShopping from './components/MyCarye/MycarShopping'
import MycarDiscount from './components/MyCarye/MycarDiscount'
import MycarCollection from './components/MyCarye/MycarCollection'
import MycarHistory from './components/MyCarye/MycarHistory'
import Mycarfeedback from './components/MyCarye/Mycarfeedback'
import myCarCenter from './components/MyCarye/myCarCenter'
	Vue.use(Vuex);
	//使用vuex的Store状态仓库设置全局
	const store = new Vuex.Store({
		state:{
	    	isLogin:0,//初始时候给一个  isLogin=0  表示用户未登录
			userID:'',
			myCarautograph:'没有任何签名'
		},
		mutations:{
	    changeLogin(state,data){
	        state.isLogin = data;
	        
	    }
		}
	})
/*                                     分界限                               */
//import iconFont from './iconfont/iconfont'
import Helpbuys from './components/Helpbuys'
import Helpsell from './components/Helpsell'

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

var zepto = require('n-zepto');

Vue.use(AjaxPlugin)
Vue.use(VueRouter)
Vue.use(Vuex);
Vue.use(zepto);


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
	},{
		path: '/Helpsell',
		name:'Helpsell',
		component: Helpsell
	},{
		path: '/Helpbuys',
		name:'Helpbuys',
		component: Helpbuys
	},
	{//设置
		path: '/MyCar/MyCarset',
		name:'MyCarset',
		component: MyCarset
	},
	{//登陆
		path: '/MyCar/MyCarlanding',
		name:'MyCarlanding',
		component: MyCarlanding
	},
	{//注册
		path: '/MyCar/MyCarregisiter',
		name:'MyCarregisiter',
		component: MyCarregisiter
	},
	{//我的社区
		path: '/MyCar/MycarCommunity',
		name:'MycarCommunity',
		component: MycarCommunity,
		meta:{auth:true}//页面需要判断要不要登陆
	},
	{//签到
		path: '/MyCar/MycarSign',
		name:'MycarSign',
		component: MycarSign,
		meta:{auth:true}//页面需要判断要不要登陆
	},
	{//商城
		path: '/MyCar/MycarShopping',
		name:'MycarShopping',
		component: MycarShopping
	},
	{//优惠劵
		path: '/MyCar/MycarDiscount',
		name:'MycarDiscount',
		component: MycarDiscount,
		meta:{auth:true}//页面需要判断要不要登陆
	},
	{//收藏
		path: '/MyCar/MycarCollection',
		name:'MycarCollection',
		component: MycarCollection
	},
	{//历史
		path: '/MyCar/MycarHistory',
		name:'MycarHistory',
		component: MycarHistory
	},
	{//反馈
		path: '/MyCar/Mycarfeedback',
		name:'Mycarfeedback',
		component: Mycarfeedback
	},
	{//个人中心
		path: '/MyCar/myCarCenter',
		name:'myCarCenter',
		component: myCarCenter
	}]

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
  router,store,
  render: h => h(App)
}).$mount('#app-box')
