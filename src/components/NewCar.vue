<template>
	<div>
		<Headers>
		</Headers>
		<div class="header">
			<span class="new_hs_left">上海</span>
			<div class="new_hs_right">
				<p class="new_ser">
					<i class="iconfont icon-search"></i><span>名爵6</span>
				</p>
				<i class="iconfont icon-duihua"></i>
				<i class="iconfont icon-iconzhaoxiangji"></i>
			</div>
		</div>
		
		<div class="new_banner">
			<swiper>
				<swiper-slide><img src="../assets/images/banner1.jpg" width="100%"/></swiper-slide>
				<swiper-slide><img src="../assets/images/banner2.jpg" width="100%"/></swiper-slide>
				<swiper-slide><img src="../assets/images/banner3.jpg" width="100%"/></swiper-slide>
				<div class="swoper-pagination"></div>
			</swiper>
		</div>
		<div class="new_nav clear">
			<ul class="clear">
				<li>
					<i class="iconfont icon-cheliangxuanzhong"></i>
					<span>条件宣传</span>
				</li>
				<li>
					<i class="iconfont icon-xiaoliangpaixing"></i>
					<span>销量排行</span>
				</li>
				<li>
					<i class="iconfont icon-zixun"></i>
					<span>汽车资讯</span>
				</li>
				<li>
					<i class="iconfont icon-chebiguize"></i>
					<span>贷款买车</span>
				</li>
				<li>
					<i class="iconfont icon-fengqiangbaokuan"></i>
					<span>今日疯抢</span>
				</li>
			</ul>
			<p><img src="../assets/images/new_nav1.png"/><span>导购</span>领克01亮相广州车展</p>
		</div>
		<div class="new_recommend">
			<p><i class="iconfont icon-like"></i>热门推荐</p>
			<ul>
				<li><router-link to="/" v-for="data in nh_datalist">
					<img v-bind:src="data.imgLogo"/>
					{{data.brandName}}
					<span>{{data.serieName}}</span>
				</router-link></li>
			</ul>
			<ul>
				<li><router-link to="/">
					
				</router-link></li>
			</ul>
		</div>
		<brandList>
			
		</brandList>
		<router-view></router-view>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	import Headers from '@/components/Headers'
	import brandList from '@/components/getBrandList'
	import {swiper,swiperSlide} from "vue-awesome-swiper"
	
	export default {
		name:'NewCar',
		components: {
			XHeader,Headers,swiper,swiperSlide,brandList
		},
		data(){
			return {
				nh_datalist:[]
			}
		},
	    mounted(){
	    	this.$http({
	    		method:'get',
	    		url:"http://route.showapi.com/1264-2",
	    		params:{"showapi_appid":"50165","showapi_sign":"1440776b2fea4758a53d91137ee22b87","brandKey":"a"}
	    	}).then((data)=>{
	    		this.nh_datalist = eval(data.data).showapi_res_body.data.slice(0,9);
	    	})
	    }
	}
	
	
	
</script>

<style>
	.headers{
		opacity: 0;
		z-index: 10;
	}
	.header{
		z-index: 11;
		height: 1.5rem;
		width: 100%;
		background-size: cover;
		color: #fff;
		text-align: center;
		position: fixed;
	}
	.clear{
		overflow: hidden;
	}
	.new_ser{
		float: left;
		display: block;
		width: 50vw;
		background: rgba(255,255,255,0.6);
		height: 0.78rem;
		border-radius: 0.39rem;
		font-size: 0;
		margin: 0.36rem 0 0 5vw;
	}
	.new_ser span{
		font-size: 0.4rem;
		margin: 0 6px;
	}
	.new_hs_left{
		display: block;
		float: left;
		font-size: 0.44rem;
		line-height: 1.5rem;
		height: 1.5rem;
		width: 17%;
	}
	.new_hs_right{
		width: 80%;
		height: 1.5rem;
		float: right;
	}
	.new_hs_right>i{
		float: right;
		line-height: 1.5rem;
		height: 1.5rem;
		margin-right: 0.4rem;
		font-weight: bolder;
		font-size: 0.55rem;
	}
	.new_banner .swiper-container{
		height: 4.05rem;
	}
	
	.new_nav{
		background: #fff;
		margin-bottom: 0.3rem;
	}
	.new_nav ul{
		padding: 0.35rem 0 0.12rem;
		/*margin-bottom: ;*/
	}
	.new_nav ul li{
		float: left;
		width: 20%;
		font-size: 0;
		text-align: center;
	}
	.new_nav ul li i{
		display: block;
		width: 10vw;
		height: 10vw;
		font-size: #fff;
		line-height: 10vw;
		text-align: center;
		color: #fff;
		border-radius: 100%;
		margin-left: 5vw;
	}
	.new_nav ul li:nth-of-type(1) i{background: #2a93f5;}
	.new_nav ul li:nth-of-type(2) i{background: #ff7a7a;}
	.new_nav ul li:nth-of-type(3) i{background: #55cc77;}
	.new_nav ul li:nth-of-type(4) i{background: #f8a34e;}
	.new_nav ul li:nth-of-type(5) i{background: #ff7a7a;}
	.new_nav ul li span{
		font-size: 0.34rem;
		color: #666666;
		line-height: 0.82rem;
	}
	.new_nav p{
		margin: 0 0.45rem;
		padding: 0.34rem 0 0.4rem;
		border-top: 1px solid #f0f0f0;
		font-size: 0.36rem;
		line-height: 0.46rem;
	}
	.new_nav p img{
		width: 22.2vw;
		float: left;
	}
	.new_nav p span{
		float: left;
		display: block;
		color: #ff5356;
		font-size: 0.32rem;
		border: 1px solid #ff5356;
		border-radius: 3px;
		line-height: 0.46rem;
		padding: 0 0.15rem;
		margin: 0 8px 0 10px;
	}
	
	.new_recommend>p{
		font-weight: bold;
		color: #454545;
		font-size: 0.4rem;
	}
	.new_recommend>p i{
		width: 0.48rem;
		height: 0.48rem;
		font-size: 0.36rem;
		color: #fff;
		background: #1d88eb;
		border-radius: 50%;
	}
</style>