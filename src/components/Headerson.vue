<template>
	<x-header :left-options="{backText: ''}" class="headerson" slot="overwrite-title">
		<slot name="title"></slot>
	</x-header>
</template>

<script>
	import { XHeader } from 'vux'
	
	export default {
		name:'Headerson',
		components:{
			XHeader
		}
	}
</script>

<style>
</style>