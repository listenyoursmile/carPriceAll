<template>
	<div>
		<Headers>
			<div slot="headers">
				<span class="new_hs_left"><i class="iconfont icon-fenlei" style="font-size: 0.7rem;"></i></span>
				<div class="new_hs_right" style="display: flex;align-items: center;justify-content: space-around;">
					<div style="display: flex;align-items: center;justify-content: space-around;width: 60%; font-size: 0.46rem;">
						<em>精选</em>
						<em>最近</em>
						<em>关注</em>
					</div>
					<span class="iconfont icon-search" style="font-size: 0.5rem;"></span>
				</div>
			</div>
		</Headers>	
		<p>这是帮买车</p>
	</div>	
</template>

<script>
	import Headers from '@/components/Headers'
	export default {
		name:'HelpCar',
		components: {
			Headers
		}
	}
</script>

<style>
	.headers{
		opacity: 1;
	}
</style>