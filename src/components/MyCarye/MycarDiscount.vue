<template><div id="">
	<x-header class="carimg">优惠</x-header>
	<h1>优惠</h1>
</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'MycarDiscount',
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