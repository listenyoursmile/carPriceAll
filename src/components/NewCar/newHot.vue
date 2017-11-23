<template>
	<div class="new_newHot">
		<x-header title="爆款推荐" :left-options="{backText: ''}" class="selectCity_header"></x-header>
		<tab>
	    	<tab-item selected><router-link to="/NewCar/newHot">本期爆款</router-link></tab-item>
	    	<tab-item><router-link to="/NewCar/newHot_cus">定制优惠</router-link></tab-item>
	    </tab>
	    <router-view></router-view>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	import { Tab, TabItem } from 'vux'
	
	export default {
		name:'newHot',
		components:{
			XHeader, Tab, TabItem
		},
		data(){
			return {	

			}
		},
		mounted(){
		}
	}
</script>

<style>
	.selectCity_header .vux-header-title{
		color: #333;		
	}
	.selectCity_header .vux-header-left a{
		color: #333;	
	}
	.selectCity_header{
		background: #fafafa;
		position: fixed;
		top: 0;
		z-index: 100;
		width: 100%;
		height: 1.5rem;
	}
	.new_newHot .vux-tab{
		margin-top: 1.5rem;
		position: fixed;
		top: 0;
		z-index: 100;
		width: 100%;
	}
		.new_newHot .vux-tab a{
			color: #6a6a6a;
		}
	.new_newHot .vux-tab .vux-tab-item.vux-tab-selected a{
		color: #6a6a6a;
	}
	.new_newHot .vux-tab .vux-tab-item a{
		display: block;
	}
	.new_newHot .vux-tab-ink-bar{
		background-color: #ee0f37;
	}
	
	.new_newHot>input{
		height: 1.2rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		background: #fe7405;
		color: #fff;
		border: none;
	}
</style>
