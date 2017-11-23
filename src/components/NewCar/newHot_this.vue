<template>
	<div class="new_newHot">
	    	<div class="newHot_banner">
				<swiper>
					<swiper-slide><img src="../../assets/images/banner1.jpg" width="100%"/></swiper-slide>
					<swiper-slide><img src="../../assets/images/banner2.jpg" width="100%"/></swiper-slide>
					<swiper-slide><img src="../../assets/images/banner3.jpg" width="100%"/></swiper-slide>
				</swiper>
			</div>
			<div class="newHot_tit">
				<h4>驭胜 S330 1.5T 自动 两驱 极夜版</h4><span>换车</span>
				<h5>指导价：<del>12万</del></h5>
				<p>分期0利息或全款购车优惠8888元，再享2100元优惠抢半价购车权</p>
			</div>
			<div class="newHot_con">
				<h5>促销：</h5>
				<ul>
					<li><span>半价车</span>下单并支付抽取一台半价车</li>
					<li><span>半价车</span>下单并支付抽取一台半价车</li>
					<li><span>半价车</span>下单并支付抽取一台半价车</li>
					<li><span>半价车</span>下单并支付抽取一台半价车</li>
					<li><span>半价车</span>下单并支付抽取一台半价车</li>
				</ul>
			</div>
			<div class="newHot_reserve">
				<ul>
					<li>定金：<span>￥1</span></li>
					<li>定金：定金在活动结束后退款,活动中退款不享受优惠</li>
					<li>下单：参与礼一个手机号仅可获奖一次</li>
					<li>参与：定金在活动结束后退款,活动中退款不享受优惠</li>
					<li>定金：<span>易车优惠券</span></li>
				</ul>
			</div>
			<div class="newHot_goods">
				
			</div>
	    	<input type="button" value="立即下单" />
	   </div>
</template>

<script>
	import {swiper,swiperSlide} from "vue-awesome-swiper"
	
	export default {
		name:'newHot',
		components:{
			swiper,swiperSlide
		},
		data(){
			return {	

			}
		},
		mounted(){
			this.$http({
				method:"get",
				url:"http://route.showapi.com/1264-1",
				params:{"showapi_appid":"50165","showapi_sign":"1440776b2fea4758a53d91137ee22b87","brandName":"宝马"}
			}).then((data)=>{
	    		console.log(data.data.showapi_res_body.data[0])
	    	});
		}
	}
</script>

<style>
	.new_banner .swiper-container{
		height: 7rem;
	}
	.newHot_tit{
		padding: 0 3% 0.36rem;
		border-bottom: 2px solid #ececec;
		background: #fff;
	}
	.newHot_tit h4{
		height: 1.3rem;
		line-height: 1.3rem;
		font-size: 0.48rem;
		color: #000;
		font-weight: bold;
		float: left;
	}
	.newHot_tit span{
		float: right;
		height: 1.3rem;
		line-height: 1.3rem;
	}
	.newHot_tit h5{
		color: #999999;
		line-height: 0.6rem;
		font-size: 0.4rem;
		clear: both;
	}
	.newHot_tit p{
		line-height: 0.6rem;
		font-size: 0.4rem;
		color: #ee0f37;
	}
	.newHot_con{
		padding: 0 3% 0.3rem;
		background: #fff;
		margin-bottom: 0.3rem;
	}
	.newHot_con h5{
		line-height: 0.92rem;
		padding-top: 0.1rem;
		font-size: 0.4rem;
		color: #686868;
	}
	.newHot_con ul li{
		margin-bottom: 0.12rem;
	}
	.newHot_con ul li span{
		display: inline-block;
		display: block;
		line-height: 0.6rem;
		padding: 0 0.25rem;
		border: 2px solid #ee0f37;
		float: left;
		margin-right: 0.2rem;
	}
	.newHot_reserve{
		padding: 0 3%;
		background: #fff;
		margin-bottom: 1.2rem;
	}
	.newHot_reserve ul li{
		line-height: 1.38rem;
		font-size: 0.4rem;
		color: #686868;
		border-bottom: 2px solid #ececec;
	}
	.newHot_reserve ul li:first-child span{
		color: #ee0f37;
		font-weight: bold;
	}
	.newHot_reserve ul li:last-child span{
		display: inline-block;
		height: 0.74rem;
		line-height: 0.74rem;
		padding: 0 0.15rem;
		margin: 0.32rem 0;
		color: #fff;
		background: #ee0f37;
	}
</style>