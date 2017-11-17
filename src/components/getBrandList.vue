<template>
	<div>
		<ul v-for="(items,index) in brandList">
			<li>{{code[index]}}</li>
			<li v-for="item in items">
				<img :src="item.imgLogo" class="brandLogo" /> 
				<span class="brandName">{{item.brandName}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'brandList',
		components:{},
		data(){
			return {
				brandList:[],
				code:[]
			}
		},mounted(){
		//按首字母获取品牌列表
		var iList = new Set()
		  this.$http({
				method:'get',
				dataType:'json',
				url:"/static/brandlist.json"
			}).then((data)=>{
				this.brandList = data.data
				
				for(var i=0 ;i<26;i++){
					let iCode = String.fromCharCode(65+i);
					if(iCode==='E'||iCode==="I"||iCode==="U"||iCode==="V"){
					}else{
						this.code.push(iCode)						
					}
				}
			})
		
		}
	}
</script>

<style>
	ul li{
		overflow: hidden;
	}
	.brandLogo{
		float: left;
	}
	.brandName{
		float: left;
	}
</style>