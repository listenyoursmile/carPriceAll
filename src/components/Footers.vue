<template>
		<!--<div><router-link :to="/Detail"></router-link></div>-->
	<div>
		<tabbar style="position: fixed">
	      <tabbar-item>
	        <img slot="icon" src="../assets/images/icon_nav_button.png">
	        <span slot="label">新车</span>
	      </tabbar-item>
	      <tabbar-item link="/SecondCar">
	        <img slot="icon" src="../assets/images/icon_nav_msg.png">
	        <span slot="label">二手车</span>
	        
	      </tabbar-item>
	      <tabbar-item selected link="/FindCar">
	        <img slot="icon" src="../assets/images/icon_nav_article.png">
	        <span slot="label">发现</span>
	      </tabbar-item>
	      <tabbar-item badge="2" link="/HelpCar">
	        <img slot="icon" src="../assets/images/icon_nav_cell.png">
	        <span slot="label">帮买车</span>
	      </tabbar-item>
	      <tabbar-item badge="2" link="/MyCar">
	        <img slot="icon" src="../assets/images/icon_nav_cell.png">
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