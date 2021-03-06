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
import myCarname1 from './components/MyCarye/myCarname'
import myCarautog from './components/MyCarye/mycarautograph'
	Vue.use(Vuex);

	//使用vuex的Store状态仓库设置全局
	const store = new Vuex.Store({
		state:{
	    	isLogin:0,//初始时候给一个  isLogin=0  表示用户未登录
			userID:'',
			myCarautograph:'没有任何签名',
			mylevocar:'请选择',
			autograph:'未填写',
			mytime:'请设置',
			address:"上海"
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
import Brand from './components/Brand'

require('./assets/iconfont/iconfont.css')

import PageTransition from './components/PageTransition'
import {AjaxPlugin} from 'vux'


//发现车

import Findactivechild from './components/FindCarye/Findactivechild'
import Jump from './components/FindCarye/Jump'
import Jump2 from './components/FindCarye/Jump2'
import Jump3 from './components/FindCarye/Jump3'
import Findactive from './components/FindCarye/Findactive'
import Findactive2 from './components/FindCarye/Findactive2'

//NewCar
import selectCity from './components/NewCar/selectCity'
import selectCar from './components/NewCar/selectCar'
import newLoan from './components/NewCar/newLoan'
import newHot from './components/NewCar/newHot'
import newHot_this from './components/NewCar/newHot_this'
import newHot_cus from './components/NewCar/newHot_cus'
import newConsider from './components/NewCar/newConsider'
import newInfo from './components/NewCar/newInfo'
import Benchi from './components/FindCarye/Benchi'
import JiangJia from './components/FindCarye/JiangJia'
import Zhinan from './components/FindCarye/Zhinan'

var zepto = require('n-zepto');

Vue.use(AjaxPlugin)
Vue.use(VueRouter)
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
			   component: Jump,
			},
			{
			   path: '/FindCar/Findactive',
			   name:'Findactive',
			   component: Findactive,
			   children:[
				   {
				   		path: '/FindCar/Findactive',
					   	name:'Jump2',
					   	component: Jump2
				   },
				   {
				   	   path:'/Findactive/Findactivechild',
				       name:'Findactivechild',
				       component: Findactivechild
				   }
			   ]
			 },{
			   path: '/FindCar/Findactive2',
			   name:'Findactive2',
			   component: Findactive2,
			   			 },{
			 	path:'/FindCar/Benchi',
			 	name:'Benchi',
			 	component:Benchi
			 },{
			 	path:'/FindCar/JiangJia',
			 	name:'JiangJia',
			 	component:JiangJia
			 },{
			 	path:'/FindCar/Zhinan',
			 	name:'Zhinan',
			 	component:Zhinan
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
	},{
		path: '/Brand',
		name: 'Brand',
		component:Brand
	},{
		path: '/Detail/:serieName:brandName:priceScope',
		name:'Detail',
	  	component: Detail
	  	
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

	},
	{//修改昵称
		path: '/MyCar/myCarCenter/myCarname',
		name:'myCarname1',
		component: myCarname1
	},
	{//修改个性签名
		path: '/MyCar/myCarCenter/myCarautog',
		name:'myCarautog',
		component: myCarautog
	},
	{//选择城市
		path: '/NewCar/selectCity',
		name:'selectCity',
		component: selectCity
	},
	{//条件选车
		path: '/NewCar/selectCar',
		name:'selectCar',
		component: selectCar
	},
	{//贷款买车
		path: '/NewCar/newLoan',
		name:'newLoan',
		component: newLoan
	},
	{//本期爆款
		path: '/NewCar/newHot',
		name:'newHot',
		component: newHot,
		children:[
			{
				path: '/NewCar/newHot',
				name:'newHot_this',
			  	component: newHot_this
			},
			{
				path: '/NewCar/newHot_cus',
				name:'newHot_cus',
			  	component: newHot_cus
			}
		]
	},
	{//销量排行
		path: '/NewCar/newConsider',
		name:'newConsider',
		component: newConsider
	},
	{//汽车资讯
		path: '/NewCar/newInfo',
		name:'newInfo',
		component: newInfo
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
