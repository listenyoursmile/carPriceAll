<template>
	<div>
		<x-header title="销量排行" :left-options="{backText: ''}" class="selectCar_header"></x-header>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default {
		name:'selectCity',
		components:{
			XHeader
		}
	}
</script>

<style>
	.selectCar_header .vux-header-title{
		color: #363636;		
	}
	.vux-header .vux-header-left .left-arrow:before{
		border-color: #363636;
	}
	.selectCar_header{
		background: #fafafa;
		border-bottom: 1px solid #f0f0f0;
	}
</style>
