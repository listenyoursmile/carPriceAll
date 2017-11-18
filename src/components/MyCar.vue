<template>
<div class="mycartm">
	<pull-to :top-load-method="refresh" :top-config="topConfig" :bottom-load-method="refresh" :bottom-config="bottomConfig"><!--插件使用的标签名-->
	<div class="cartop" @click="goLanding">
		<img src="../assets/images/mycar/1.jpg" v-bind:class="{macarimg:isTrue}"/>
		<div v-bind:class="{macaruser:isUser}" class="macarus">
			<p>{{myCarname}}</p>
		</div>
	</div>
	<p class="landorder">我的订单</p>
	<div class="landfour">
		<li><a href="/MyCar/MyCarlanding">买新车</a></li>
		<li><a href="">今日疯抢</a></li>
		<li><a href="">超值特惠</a></li>
		<li><a href="">新车询价</a></li>
		<li><a href="">新车贷款</a></li>
	</div>
	
	<ul class="mycarul">
		<li @click="MycarCommunity"><span></span>我的社区<b>></b></li>
		<li @click="MycarSign"><span></span>签到领车币<b>></b></li>
		<li @click="MycarShopping"><span></span>车币商城<b>></b></li>
		<li @click="MycarDiscount"><span></span>我的优惠券<b>></b></li>
		<li @click="MycarCollection"><span></span>车型收藏<b>></b></li>
		<li @click="MycarHistory"><span></span>浏览历史<b>></b></li>
		<li @click="Mycarfeedback"><span></span>用户反馈<b>></b></li>
		<li @click="Mycarset"><span></span>设置<b>></b></li>
	</ul>
	</pull-to>
</div>	
</template>
	<!--<p @click="goSet">我的车页</p>-->
	<!--<router-link to="/MyCar/MyCarset">跳转</router-link>  -->
<script>
	import PullTo from 'vue-pull-to'
	import { XHeader } from 'vux'
	const config = {//上拉的名字
	  pullText: '下拉', // 下拉时显示的文字
	  triggerText: '释放更新', // 下拉到触发距离时显示的文字
	  loadingText: '加载中...', // 加载中的文字
	  doneText: '加载完成', // 加载完成的文字
	  failText: '加载失败', // 加载失败的文字
	  loadedStayTime: 400, // 加载完后停留的时间ms
	  stayDistance: 50, // 触发刷新后停留的距离
	  triggerDistance: 70 // 下拉刷新触发的距离
	}
	const bottomConfig = {//上拉的名字
	  pullText: '上拉加载',
	  triggerText: '释放更新',
	  loadingText: '加载中...',
	  doneText: '加载完成',
	  failText: '加载失败',
	  loadedStayTime: 400,
	  stayDistance: 50,
	  triggerDistance: 70
	}
	/*console.log(this.$route.params.userID)*/
	export default {
		name:'MyCar',
		data(){
			return {
				topConfig:config,
				bottomConfig,
				isTrue:false,
				isUser:true,
				myCarname:this.$store.state.userID
			}
		},
		components: {
			XHeader,
			 PullTo
		},
		mounted(){
			if(this.$store.state.isLogin==0){
				this.isTrue=false
			}else{
				this.isTrue=true
				this.isUser=false
			}
		},
		methods:{
			goLanding:function(){
				this.$router.push({path:"/MyCar/MyCarlanding"})
			},
			MycarSign:function(){
				this.$router.push({path:"/MyCar/MycarSign"})
			},
			MycarShopping:function(){
				this.$router.push({path:"/MyCar/MycarShopping"})
			},
			MycarCommunity:function(){
				this.$router.push({path:"/MyCar/MycarCommunity"})
			},
			MycarDiscount:function(){
				this.$router.push({path:"/MyCar/MycarDiscount"})
			},
			MycarCollection:function(){
				this.$router.push({path:"/MyCar/MycarCollection"})
			},
			MycarHistory:function(){
				this.$router.push({path:"/MyCar/MycarHistory"})
			},
			Mycarfeedback:function(){
				this.$router.push({path:"/MyCar/Mycarfeedback"})
			},
			Mycarset:function(){
				this.$router.push({path:"/MyCar/MyCarset"})
			},
			//上下拉刷新
			refresh:function(loaded) {
		        setTimeout(() => {
		        	loaded('done');//成功
		        	
		        	//loaded('fail')//失败
		        }, 2000);
		     }
		}
		
	}
</script>

<style>
	.mycartm{
		background: #f5f5f5;
		margin-bottom: 1.6rem;
	}
	.cartop{
		height: 3.9rem;
		width: 100%;
	}
	.cartop img{
		height: 3.9rem;
		width: 100%;
		background: #3091ea;
	}
	.landorder{
		height:1.24rem;
		line-height: 1.24rem;
		font-size:0.4rem;
		font-size: 0.15rem;
		border-bottom:solid 1 #ccc;
		padding-left: 0.35rem;
		background: #fff;
	}
	.landfour{
		width: 100%;
		height: 2.1rem;
		line-height: 2.1rem;
		display: flex;
		justify-content: space-around;
		background: #fff;
	}
	.landfour a{
		font-size: 0.35rem;
		color: #c1c1c1;
	}
	.mycarul{
		margin-top: 0.3rem;
		background: #fff;
		padding: 0 0.2rem;
	}
	.mycarul li{
		height: 1.5rem;
		line-height: 1.5rem;
		
	}
	.mycarul b{
		float: right;
	}
	.macarimg{
		display: none;
	}
	.macaruser{
		display: none;
	}
	.macarus{
		height: 100%;
		background: #1498FD;
	}
</style>
