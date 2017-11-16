<template>
	<div><router-link :to="/Detail"></router-link></div>
	<div>
		<tabbar style="position: fixed">
	      <tabbar-item>
	        <img slot="icon" src="../assets/images/icon_nav_button.png">
	        <span slot="label">Wechat</span>
	      </tabbar-item>
	      <tabbar-item show-dot link="/SecondCar">
	        <img slot="icon" src="../assets/images/icon_nav_msg.png">
	        <span slot="label">Message</span>
	        
	      </tabbar-item>
	      <tabbar-item selected link="/SecondCar">
	        <img slot="icon" src="../assets/images/icon_nav_article.png">
	        <span slot="label">Explore</span>
	      </tabbar-item>
	      <tabbar-item badge="2">
	        <img slot="icon" src="../assets/images/icon_nav_cell.png">
	        <span slot="label">News</span>
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