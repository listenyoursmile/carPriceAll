<template>
<div>
	<x-header class="carimg">历史</x-header>
	<h1>历史</h1>
</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'MycarHistory',
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