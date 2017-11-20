<template>
	<div>
		<Headers>
			<div slot="headers">
			
				<div class="new_hs_right"><p style="line-height: 1.5rem;font-size: 0.5rem;font-weight: bold;padding-right: 1.5rem;">二手车</p></div>
			</div>
		</Headers>
	   
		<p class="top_photo"><img src="../../assets/images/findcar/f1.jpg" /></p>
		<div class="find_huo">
			<router-link to="/FindCar/Findactive">
				<div class="huo_tital huo_one">
					<img src="../../assets/images/findcar/f2.png"/>
					<p>
						<b>活动专区</b>
					    <i>豪送5万元京东卡</i>
					</p>	
				</div>
		   </router-link>
		   <router-link to="/FindCar/Findactive2">
				<div class="huo_tital">
					<img src="../../assets/images/findcar/f3.jpg" alt="" />
					<p>
						 <b>游戏广场</b>
					    <i>我是车手决战巅峰</i>
					</p>	   
				</div>
		   </router-link>
	   </div>
	
		<div class="find_luobo">
			<p>买车必备</p>
			<swiper>
				<swiper-slide>
				       <ul class="find_choose">
				       	   <li>
				       	   	   <b><img src="../../assets/images/findcar/f4.png"/></b>
				       	   	   <i>车型对比</i>
				       	   </li>
				       	   <li>
				       	   	     <b><img src="../../assets/images/findcar/f5.png"/></b>
				       	   	    <i>购车计算器</i>
				       	   </li>
				       	   <li>
				       	    	 <b><img src="../../assets/images/findcar/f6.png"/></b>
				       	   	    <i>二手车估价</i>
				       	   </li>
				       	   <li>
				       	   	  <b><img src="../../assets/images/findcar/f7.png"/></b>
				       	   	    <i>查违章</i>
				       	   </li>
				       	   
				       	    <li>
				       	   	    <b><img src="../../assets/images/findcar/f8.png"/></b>
				       	   	   <i>降价排行</i>
				       	   </li>
				       	   <li>
				       	   	    <b><img src="../../assets/images/findcar/f9.png"/></b>
				       	   	   <i>精彩视频</i>
				       	   </li>
				       	   <li>
				       	   	   <b><img src="../../assets/images/findcar/f10.png"/></b>
				       	   	   <i>摇号查询</i>
				       	   </li>
				       	   <li>
				       	   	   <b><img src="../../assets/images/findcar/f11.png"/></b>
				       	   	   <i>上市新车</i>
				       	   </li>
				       </ul>
				      
				      	   <!--<group-title></group-title>
						    <grid :cols="4" v-for="data in datalist">	
						      <grid-item v-for="i in 8" :key="i">
						        <span class="grid-center">
						        	<img src="../assets/images/mycar/f4.png"/>
						        	<i>{{data.seriesRecordId}}</i>
						        </span>
						      </grid-item>   
						    </grid>-->
                                     
				</swiper-slide>
				<swiper-slide>
					   <ul class="find_choose">
				       	   <li>
				       	   	     <b><img src="../../assets/images/findcar/f12.png"/></b>
				       	   	   <i>车型对比</i>
				       	   </li>
				       	   <li>
				       	   	     <b><img src="../../assets/images/findcar/f13.png"/></b>
				       	   	    <i>购车计算器</i>
				       	   </li>
				       	   <li>
				       	    	  <b><img src="../../assets/images/findcar/f14.png"/></b>
				       	   	    <i>二手车估价</i>
				       	   </li>
				       	   <li>
				       	    	  <b><img src="../../assets/images/findcar/f15.png"/></b>
				       	   	    <i>二手车估价</i>
				       	   </li>
				     </ul>              
				</swiper-slide>
				<div class="swoper-pagination"></div>
			</swiper>
		    <em></em>
		</div>
		<div class="find_server">
			<p>买车服务</p>
			<div class="server_title">
				<img src="../../assets/images/findcar/28.png"/>
				<p>
					<i>奔驰汽车</i>
					<i>值得拥有</i>
				</p>
			</div>
		    <ul class="server_choose">
				       	   <li>
				       	   	   <b><img src="../../assets/images/findcar/f12.png"/></b>
				       	   	   <i>车型对比</i>
				       	   </li>
				       	   <li>
				       	   	   <b><img src="../../assets/images/findcar/f13.png"/></b>
				       	   	    <i>购车计算器</i>
				       	   </li>
				       	   <li>
				       	    	 <b><img src="../../assets/images/findcar/f14.png"/></b>
				       	   	    <i>二手车估价</i>
				       	   </li>
				       	   <li>
				       	    	<b><img src="../../assets/images/findcar/f15.png"/></b>
				       	   	    <i>二手车估价</i>
				       	   </li>
				       	   <li>
				       	   	  <b><img src="../../assets/images/findcar/f16.png"/></b>
				       	   	   <i>车型对比</i>
				       	   </li>
				       	   <li>
				       	   	    <b><img src="../../assets/images/findcar/f17.png"/></b>
				       	   	    <i>购车计算器</i>
				       	   </li>
				       	   <li>
				       	    	 <b><img src="../../assets/images/findcar/f18.png"/></b> 
				       	   	    <i>二手车估价</i>
				       	   </li>
				       	   <li>
				       	    	 <b><img src="../../assets/images/findcar/f19.png"/></b>
				       	   	    <i>二手车估价</i>
				       	   </li>
			</ul>
			
	    </div>		
	    <div class="find_yong">
	    	  <p>汽车用品</p>
	    	  <ul class="yong_choose">
				       	   <li>
				       	   	   <em><img src="../../assets/images/findcar/20.png"/></em>
				       	   	   <i>手机支架</i>
				       	   	   <b>35</b>
				       	   </li>
				       	  <li>
				       	   	   <em><img src="../../assets/images/findcar/21.png"/></em>
				       	   	   <i>手机支架</i>
				       	   	   <b>35</b>
				       	   </li>
				       	   <li>
				       	   	  <em><img src="../../assets/images/findcar/f22.png"/></em>
				       	   	   <i>手机支架</i>
				       	   	   <b>35</b>
				       	   </li>
				       	   <li>
				       	   	   <em><img src="../../assets/images/findcar/23.png"/></em>			       
				       	   </li>
			 </ul>
		   <strong></strong>
	     </div>
	     <div class="find_like">
	    	<p>猜你喜欢</p>
	    	<ul class="like_choose">
				 <li>
				     <img src="../../assets/images/findcar/24.png"/>
				     <i>手机支架</i>
				     <b>35</b>
				 </li>
				 <li>
				     <img src="../../assets/images/findcar/25.png"/>
				     <i>手机支架</i>
				     <b>35</b>
				 </li>     
				<li>
				     <img src="../../assets/images/findcar/26.png"/>
				     <i>手机支架</i>
				     <b>35</b>
				 </li>  
				
			</ul>
	    </div>

	</div>
</template>
<script>
  	import { XHeader } from 'vux'
	import Headers from '@/components/Headers'
	import {swiper,swiperSlide} from "vue-awesome-swiper"
	export default {
		name:'FindCar',
		components: {
			XHeader,Headers,swiper,swiperSlide
		},
		data(){
			return{
				datalist:[]
			}
		}
  }
	
</script>
<style>
	.headers{opacity: 1 !important;z-index: 10;top:0;}
	/*头部*/
	.top_photo{height:3.2rem;width: 100%;overflow: hidden;margin-top: 1.5rem;}
	.top_photo img{height:3.2rem;width: 100%;}
	.find_huo{width: 95%;background: #f6f6f6;overflow: hidden;font-size: 0.2rem;overflow: hidden;padding-left: 5%;}
	.find_huo .huo_tital{width:45%;float: left;background: #fff;height: 2rem;overflow: hidden;}
	.find_huo .huo_tital img{width: 30%;float: left;margin-right: 4px;margin-top:5%;}
	.find_huo .huo_tital p{float:left;width: 50%;}
	.find_huo .huo_tital p b{display: block;margin-top:15%;}
	.find_huo .huo_tital p i{width:100%;overflow: hidden;text-overflow: ellipsis;white-space:nowrap;height:0.5rem;display: inline-block;}
	
	.find_huo .huo_one{margin-right:4%;}
	/*选项卡轮播*/
    /*.find_luobo{height:7.5rem;}*/
    .find_luobo p{height:1rem;line-height: 1rem;font-size: 0.3rem;font-weight: bold;padding: 0 5%;}
    /*.find_luobo grid-item img{width: 100%;height:0.5rem;}*/
    /*.grid-center{display: block;text-align: center;color: #666;}*/
    .find_choose{width: 100%;display: flex;flex-wrap:wrap;}
    .find_choose li{width:25%;border: 1px solid #ccc;box-sizing: border-box;text-align: center;}
    .find_choose li b{width:70%;margin: 0 auto;height:1rem;display:block;line-height: 1rem;padding-top: 0.2rem;overflow: hidden;}
    .find_choose li img{width:60%;margin: 0 auto;}
    .find_choose li i{font-size:0.1rem;font-weight: 100;}
    .find_luobo em{width: 100%;background:#f6f6f6;height:0.2rem;display: block;}
     /*买车服务*/
    /*.find_server{height:7.5rem;}*/
    .find_server p{height:1rem;line-height: 1rem;font-size: 0.3rem;font-weight: bold;padding: 0 5%;}
    .find_server .server_choose{width: 100%;display: flex;flex-wrap:wrap;}
    .find_server .server_choose li{width:25%;border: 1px solid #ccc;box-sizing: border-box;text-align: center;}
    .find_server .server_choose li b{width:70%;margin: 0 auto;height:1rem;display:block;line-height: 1rem;padding-top: 0.2rem;overflow: hidden;background: cover;}
    .find_server .server_choose li img{width:60%;margin: 0 auto;}
    .find_server .server_choose li i{font-size:0.1rem;font-weight: 100;}
    
    .find_server .server_title {overflow: hidden;margin-bottom: 4%;}
    .find_server .server_title img{width:30%;float: left;}
    .find_server .server_title p{width: 60%;display: inline-block;float: left;padding-top: 3%;}
    .find_server .server_title p i{display:block;line-height: 0.6rem;}
    
    
    /*汽车用品*/
   .find_yong p{height:1rem;line-height: 1rem;font-size: 0.3rem;font-weight: bold;padding: 0 5%;}
   .find_yong .yong_choose{width: 100%;overflow: hidden;}
   .find_yong .yong_choose li{width:25%;text-align: center;float: left;font-size: 0.1rem;}
   .find_yong .yong_choose li b{width: 100%;}
   .find_yong .yong_choose li img{width: 80%;height:1.5rem;}
   .find_yong .yong_choose li b{display: block;font-weight: 100;color: red;}
   .find_yong  strong{width: 100%;background:#f6f6f6;height:0.2rem;display: block;}
   
   /*猜你喜欢*/
   .find_like{margin-bottom:2rem;}   /*固定底部*/
   .find_like p{height:1rem;line-height: 1rem;font-size: 0.3rem;font-weight: bold;padding: 0 5%;}
   .find_like .like_choose{width: 100%;overflow: hidden;}
   .find_like .like_choose li{float: left;width:50%;box-sizing: border-box;border: 1px solid #ccc;text-align: center;font-size: 0.1rem;}
   .find_like .like_choose li b{width: 100%;}
   .find_like .like_choose li img{width: 80%;margin:0 auto;height: 2rem;}
   .find_like .like_choose li b{display: block;font-weight: 100;color: red;}
   

  
  
</style>