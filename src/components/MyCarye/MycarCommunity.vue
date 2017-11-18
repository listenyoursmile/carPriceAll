<template><div id="">
	<x-header class="carimg">我社区</x-header>
	<p>我社区</p>
</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'MycarCommunity',
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