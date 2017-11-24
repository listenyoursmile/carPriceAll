<template>
	<div class="helpsell">
		<x-header :left-options="{backText: ''}" class="headerson" style="position: fixed;top: 0; width: 100%;">
			帮您卖车
		</x-header>
		<div class="helpsell_content">
			<flexbox style="position: fixed;bottom: 1rem; width: 86%;left: 50%;margin-left: -43%;">
		        <flexbox-item>
		          <x-button type="primary" style="font-size: 0.44rem;">天天拍车卖高价</x-button>
		        </flexbox-item>
		        <flexbox-item>
		          <x-button type="warn" style="font-size: 0.44rem;">自己网上卖</x-button>
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
		background:url(../../static/images/helpsell.png) no-repeat center 1.4rem;
		background-size: 100%;
	}
</style>