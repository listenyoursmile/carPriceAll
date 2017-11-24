<template>
<div>
	<x-header class="carimg">昵称<span @click="Nmaeok" style="position: absolute;right: 0.5rem;">完成</span></x-header>
	<input type="text" v-model="myname" style="width: 100%;height: 1.5rem;display: block;"/>
</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'myCarname1',
		components: {
			XHeader
		},
		data(){
			return {
				myname:''
			}
			
		},
		methods:{
			Nmaeok:function(){
				this.$store.state.userID = this.myname
				alert("修改成功")
				this.$router.push({path:"/MyCar"})
			}
		}
		
	}
</script>

<style>
</style>