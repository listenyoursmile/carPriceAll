<template>
<div>
	<x-header class="carimg">商城</x-header>
	<h1>商城</h1>
</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'MycarShopping',
		components: {
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