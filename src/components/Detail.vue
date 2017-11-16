<template>
	<div>
		<div>这是详情页</div>
		<p>{{$route.params.goodsID}}</p>
		
		
	</div>
</template>

<script>
	export default {
		name:'Detail',
		mounted(){
			this.$emit('to-parent',true);
		}
	}
</script>

<style>
</style>