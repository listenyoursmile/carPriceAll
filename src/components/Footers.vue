<template>
	<div>
		<tabbar style="position: fixed">
	      <tabbar-item>
	        <img slot="icon" src="../assets/images/icon_nav_button.png">
	        <span slot="label">新车</span>
	      </tabbar-item>
	      <tabbar-item>
	        <img slot="icon" src="../assets/images/icon_nav_button.png">
	        <span slot="label">二手车</span>
	      </tabbar-item>
	      <tabbar-item show-dot>
	        <img slot="icon" src="../assets/images/icon_nav_msg.png">
	        <span slot="label">发现</span>
	      </tabbar-item>
	      <tabbar-item>
	        <img slot="icon" src="../assets/images/icon_nav_button.png">
	        <span slot="label">帮买车</span>
	      </tabbar-item>
	      <tabbar-item>
	        <img slot="icon" src="../assets/images/icon_nav_button.png">
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