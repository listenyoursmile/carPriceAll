<template>
	<div class="headers">
		<slot name="headers"></slot>
	</div>
</template>

<script>
	export default {
		name:'Headers',
			components:{
		}
	}
</script>

<style>
	.headers{
		height: 1.5rem;
		width: 100%;
		background: url(../assets/images/header-bg.jpg);
		background-size: cover;
		color: #fff;
		text-align: center;
		position: fixed;
		z-index: 100;
	}
</style>