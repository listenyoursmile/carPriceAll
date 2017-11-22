<template>
	<div>
		<x-header title="条件选车" :left-options="{backText: ''}" class="selectCar_header"></x-header>
		<range v-model="data1" @on-change="onChange"></range>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	import { Range } from 'vux'
	export default {
		name:'selectCity',
		components:{
			XHeader,Range
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
