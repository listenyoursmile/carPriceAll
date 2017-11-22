<template>
<div>
	<x-header class="carimg">签名<span @click="myCarautog" style="position: absolute;right: 0.5rem;">完成</span></x-header>
	<input type="text" v-model="myCarautog1" style="width: 100%;height: 3rem;display: block;"/>
</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'myCarautog',
		components: {
			XHeader
		},
		data(){
			return {
				myCarautog1:''
			}
			
		},
		methods:{
			myCarautog:function(){
				this.$store.state.myCarautograph = this.myCarautog1
				alert("个性签名修改成功")
				this.$router.push({path:"/MyCar"})
			}
		}
		
	}
</script>

<style>
</style>