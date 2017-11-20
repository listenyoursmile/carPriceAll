<template>
	<div>
		<x-header :left-options="{showBack: true}" style="position: fixed;top: 0;width: 100%;">品牌</x-header>
		<div class="brand_empty"></div>
		<brandList></brandList>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	import brandList from '@/components/getBrandList'
	export default {
		name:'Brand',
		components:{
			brandList,XHeader
		}
	}
</script>

<style>
	.brand_empty{
		height: 1.5rem;
	}
</style>