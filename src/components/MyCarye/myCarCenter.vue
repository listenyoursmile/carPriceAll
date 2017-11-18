<template>
<div>
	<x-header class="carimg">个人中心</x-header>
	<h1>个人中心</h1>
</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'myCarCenter',
		components:{
			XHeader
		}
	}
</script>
<style>
	.carimg{
		background: url(../../assets/images/header-bg.jpg);
		background-size:cover;
		height: 1.5rem;
		overflow: hidden;
	}
</style>