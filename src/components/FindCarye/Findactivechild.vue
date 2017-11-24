<template>
	<div>
		<x-header class="carimg">游戏广场</x-header>
		<p><img src="../../../static/images/findcar/fa8.png" alt="" /></p>
	</div>
</template>

<script>
	import {XHeader} from 'vux'
	import Headers from '@/components/Headers'
	export default {
		name:"Findactivechild",
		components: {
			XHeader,Headers
		},
		data(){
			return{
				datalist:[]
			}
		}
	}
</script>

<style>
	.carimg{background: url(../../../static/images/header-bg.jpg));background-size:cover;height: 1.5rem;overflow: hidden;
	}
	
	p{width: 100%;height: 100%;margin: 0;padding: 0;}
	p img{width: 100%;height: 100%;border: 0;}	
</style>