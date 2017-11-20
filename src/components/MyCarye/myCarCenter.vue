<template>
<div>
	<x-header class="carimg">个人中心</x-header>
</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'myCarCenter',
		components:{
			XHeader,
		}
}
</script>
<style>
	.carimg{
		background-size:cover;
		height: 1.5rem;
		overflow: hidden;
	}
</style>