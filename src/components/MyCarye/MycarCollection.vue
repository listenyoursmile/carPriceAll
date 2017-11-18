<template><div>
	<x-header class="carimg">收藏</x-header>
	<h1>收藏</h1>
</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'MycarCollection',
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