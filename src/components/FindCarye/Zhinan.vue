<template>
	<div>
		 <x-header class="carimg">指南者</x-header>	
		 <div>
		 	<ul>
		 		<li>综述</li>
		 		<li>综述</li>
		 		<li>综述</li>
		 		<li>综述</li>
		 		<li>综述</li>
		 	</ul>
		 </div>
		 <div>
		 	
		 </div>
	</div>
</template>

<script>
	import {XHeader} from 'vux'
	import Headers from '@/components/Headers'
	export default {
		name:"Zhinan",
		components: {
			XHeader,Headers
		},
		data(){
			return{
				pricelist:[]
			}
		},
		mounted(){
			this.$http({
				method:"get",
				dataType:"json",
				url:"/static/brandlist.json"
			}).then((data)=>{
				this.datalist=data.data;
				console.log(data.data)
			})
		}
		
	}
</script>

<style>		
	.carimg{background: url(../../assets/images/header-bg.jpg));background-size:cover;height: 1.5rem;overflow: hidden;
	}
   
</style>