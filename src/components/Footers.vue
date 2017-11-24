<template>
	<div>
<!--		<div><router-link :to="/Detail"></router-link></div>-->
		<tabbar style="position: fixed">
	      <tabbar-item selected link="/">
	        <img slot="icon" src="../../static/images/footer-1.png">
	        <span slot="label">新车</span>

	      </tabbar-item>
	      <tabbar-item link="/SecondCar">
	        <img slot="icon" src="../../static/images/footer-2.png">
	        <span slot="label">二手车</span>
	      </tabbar-item>
	      <tabbar-item show-dot link="/FindCar">
	        <img slot="icon" src="../../static/images/footer-3.png">
	        <span slot="label">发现</span>
	      </tabbar-item>

	      <tabbar-item link="/HelpCar">
	        <img slot="icon" src="../../static/images/footer-4.png">
	        <span slot="label">社区</span>

	      </tabbar-item>
	      <tabbar-item link="/MyCar">
	        <img slot="icon" src="../../static/images/footer-5.png">
	        <span slot="label">我的</span>
	      </tabbar-item>
	      
	    </tabbar>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
		name:'Footers',
		components:{
			Tabbar, TabbarItem
		}
	}
</script>

<style>

</style>
