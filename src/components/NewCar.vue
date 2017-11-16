<template>
	<div>
		<Headers>
			<div slot="headers">
				<span class="hs-left">上海</span>
			</div>
		</Headers>
		<p>首页</p>
		<router-view></router-view>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	import Headers from '@/components/Headers'
	export default {
		name:'NewCar',
		components: {
			XHeader,Headers
		}
	}
</script>

<style>
	.new_ser{
		display: block;
		width: 50%;
		background: rgba(255,255,255,0.6);
		height: 0.78rem;
	}
	.hs-left{
		display: block;
		float: left;
		font-size: 0.44rem;
		line-height: 1.5rem;
		
	}
</style>