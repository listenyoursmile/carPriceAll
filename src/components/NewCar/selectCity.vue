<template>
	<div>
		<x-header title="选择城市" :left-options="{backText: ''}" class="selectCity_header"></x-header>
		<div id="">
			<ul v-for="data in cityList">
				<li v-for="item in data">{{item.provinceName}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default {
		name:'selectCity',
		components:{
			XHeader
		},
		data(){
			cityList:[]
		},
		mounted(){
			this.$http({
				method:'get',
				dataType:'json',
				url:"/static/cityList.json"
			}).then(data=>{
				this.cityList = data.data
//				this.cityList = 
			})
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
	}
</style>
