// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Info from './components/Info'
import Detail from './components/Detail'
import SecondCar from './components/SecondCar'
import FindCar from './components/FindCar'
import HelpCar from './components/HelpCar'
import MyCar from './components/MyCar'
import PageTransition from './components/PageTransition'
import {AjaxPlugin} from 'vux'
Vue.use(AjaxPlugin)
Vue.use(VueRouter)

const routes = [{
	path:'/',
	name:'PageTransition',
	component:PageTransition,
	children:[
	{
		path: '',
  		component: Info

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
