// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Info from './components/Info'
import Detail from './components/Detail'

//五个主页面路由
import NewCar from './components/NewCar'
import SecondCar from './components/SecondCar'
import FindCar from './components/FindCar'
import HelpCar from './components/HelpCar'
import MyCar from './components/MyCar'


<<<<<<< HEAD

//我的页面路由的接入
import MyCarset from './components/MyCarye/MyCarset'
=======
//import iconFont from './iconfont/iconfont'
require('./assets/iconfont/iconfont.css')
>>>>>>> branch 'master' of https://github.com/listenyoursmile/carPriceAll.git

import PageTransition from './components/PageTransition'
import {AjaxPlugin} from 'vux'

Vue.use(AjaxPlugin)
Vue.use(VueRouter)


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
			path: '/Detail/:goodsID',
			name:'Detail',
		  	component: Detail
		  	
		},{
			path: '/SecondCar',
			name: 'SecondCar',
			component:SecondCar
			
		},{
			path: '/FindCar',
			name: 'FindCar',
			component:FindCar
			
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
		component: MyCarset
	}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
