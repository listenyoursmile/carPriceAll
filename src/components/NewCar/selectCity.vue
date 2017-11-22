<template>
	<div>
		<x-header title="选择城市" :left-options="{backText: ''}" class="selectCity_header"></x-header>
		<div id="">
			<p>当前定位城市</p>
			<p>上海</p>
			<!--{{cityList}}-->
			<ul>
				<li v-for="item in cityList">{{item.provinceName}}</li>
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
			return {
				cityList:[]				
			}
		},
		mounted(){
			function compare(obj1, obj2) {
			    var val1 = obj1.provinceName;
			    var val2 = obj2.provinceName;
			    return val1.localeCompare(val2,'zh')
			} 
			
			this.$http({
				method:'get',
				dataType:'json',
				url:"/static/cityList.json"
			}).then(data=>{
				this.cityList = data.data.sort(compare)
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
