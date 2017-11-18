<template>
<div>
	<x-header class="carimg">签到</x-header>
	<h1>签到</h1>
</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'MycarSign',
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