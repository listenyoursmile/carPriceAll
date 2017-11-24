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
		<div class="helpcar_contentbox">
			<div class="helpcar_banner">
				<swiper :aspect-ratio="300/800" :show-dots="false">
			      <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
			      	<img :src="item">
			      </swiper-item>
			    </swiper>
			</div>
		</div>
		<ul class="helpcar_nav"">
			<li>
				<img src="../../static/images/sq-4.png" />
				<h3>直播</h3>
			</li>
			<li>
				<img src="../../static/images/sq-5.png" />
				<h3>专栏</h3>
			</li>
			<li>
				<img src="../../static/images/sq-1.png" />
				<h3>话题</h3>
			</li>
			<li>
				<img src="../../static/images/sq-2.png" />
				<h3>热门榜</h3>
			</li>
			<li>
				<img src="../../static/images/sq-3.png" />
				<h3>鉴定</h3>
			</li>
		</ul>
	</div>	
</template>

<script>
	import Headers from '@/components/Headers'
	import { Swiper,SwiperItem } from 'vux'
	const imgList = [
	  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
	  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
	  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
	]
	export default {
		name:'HelpCar',
		data(){
			return {
				demo04_list: imgList
			}
		},
		components: {
			Headers,Swiper,SwiperItem
		}
	}
</script>

<style scoped>
	.headers{
		opacity: 1;
	}
	.helpcar_contentbox{
		padding-top: 1.5rem;
	}
	.swiper-demo-img img {
	  width: 100%;
	}
	.helpcar_nav{
		height: 1.98rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 0.28rem solid #f8f8f8;
	}
	.helpcar_nav li{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 1.3rem;
		color: #666;
	}
	.helpcar_nav li img{
		height: 0.56rem;
	}
</style>