<template>
	<div class="helpsell">
		<x-header :left-options="{backText: ''}" class="headerson" style="position: fixed;top: 0; width: 100%;">
			帮您卖车
		</x-header>
		<div class="helpsell_content">
			<flexbox style="position: fixed;bottom: 2rem; width: 86%;margin:0 auto;">
		        <flexbox-item>
		          <x-button type="primary">primary</x-button>
		        </flexbox-item>
		        <flexbox-item>
		          <x-button type="warn">Delete</x-button>
		        </flexbox-item>
		    </flexbox>
		</div>
	</div>
</template>

<script>
	import { XHeader,Flexbox,FlexboxItem,XButton } from 'vux'
	export default{
		name:"Helpsell",
		components:{
			XHeader,Flexbox,FlexboxItem,XButton
		}
	}
</script>

<style>
	.helpsell{
		height: 100%;
	}
	.helpsell_content{
		height:100%;
		background:url(../assets/images/helpsell.png) no-repeat center 1.4rem;
		background-size: 100%;
	}
</style>