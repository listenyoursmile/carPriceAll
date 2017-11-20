<template>
	<div>
		<x-header class="carimg">设置</x-header>
		<button @click="quit" v-bind:class="{showBack:isTrue}">退出登陆</button>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'SecondCar',
		components: {
			XHeader,
		},
		data(){
			return {
			isTrue:true	
			}
		
		},
		methods:{
			
			//退出登陆
			quit:function(){
				this.$store.commit('changeLogin','0')
				this.isTrue=true
			}
		},
		mounted(){
			if(this.$store.state.isLogin==0){
				this.isTrue=true
			}else{
				this.isTrue=false
			}
		},
	}
</script>
<style>
	.carimg{
		background: url(../../assets/images/header-bg.jpg);
		background-size:cover;
		height: 1.5rem;
		overflow: hidden;
	}
	.showBack{
		display: none;
	}
</style>