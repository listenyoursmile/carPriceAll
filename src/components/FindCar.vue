<template>
	<div>
		<!--<Headers></Headers>-->
		<p><img src="../assets/images/findcar/f1.jpg" alt="" class="top_photo"  /></p>	
		<div class="find_huo">
			<div class="huo_tital huo_one">
				<img src="../assets/images/findcar/f2.png" alt="" />
				<p>
					<b>活动专区</b>
				    <i>豪送5万元京东卡</i>
				</p>	
			</div>
			<div class="huo_tital">
				<img src="../assets/images/findcar/f3.jpg" alt="" />
				<p>
					 <b>游戏广场</b>
				    <i>我是车手决战巅峰</i>
				</p>	   
			</div>
		</div>
		<div class="find_luobo">
			<p>买车必备</p>
			<swiper>
				<swiper-slide>
				       <ul class="find_choose">
				       	   <li>
				       	   	   <b><img src="../assets/images/findcar/f4.png"/></b>
				       	   	   <i>车型对比</i>
				       	   </li>
				       	   <li>
				       	   	     <b><img src="../assets/images/findcar/f5.png"/></b>
				       	   	    <i>购车计算器</i>
				       	   </li>
				       	   <li>
				       	    	 <b><img src="../assets/images/findcar/f6.png"/></b>
				       	   	    <i>二手车估价</i>
				       	   </li>
				       	   <li>
				       	   	  <b><img src="../assets/images/findcar/f7.png"/></b>
				       	   	    <i>查违章</i>
				       	   </li>
				       	   
				       	    <li>
				       	   	    <b><img src="../assets/images/findcar/f8.png"/></b>
				       	   	   <i>降价排行</i>
				       	   </li>
				       	   <li>
				       	   	    <b><img src="../assets/images/findcar/f9.png"/></b>
				       	   	   <i>精彩视频</i>
				       	   </li>
				       	   <li>
				       	   	   <b><img src="../assets/images/findcar/f10.png"/></b>
				       	   	   <i>摇号查询</i>
				       	   </li>
				       	   <li>
				       	   	   <b><img src="../assets/images/findcar/f11.png"/></b>
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
					   <ul class="find_choose choose_two">
				       	   <li>
				       	   	     <b><img src="../assets/images/findcar/f10.png"/></b>
				       	   	   <i>车型对比</i>
				       	   </li>
				       	   <li>
				       	   	     <b><img src="../assets/images/findcar/f10.png"/></b>
				       	   	    <i>购车计算器</i>
				       	   </li>
				       	   <li>
				       	    	  <b><img src="../assets/images/findcar/f10.png"/></b>
				       	   	    <i>二手车估价</i>
				       	   </li>
				       	   <li>
				       	    	  <b><img src="../assets/images/findcar/f10.png"/></b>
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
				<img src="../assets/images/findcar/28.png"/>
				<p>
					<i>奔驰汽车</i>
					<i>值得拥有</i>
				</p>
			</div>
			
		    <ul class="find_choose choose_two">
				       	   <li>
				       	   	   <b><!--<img src="../assets/images/mycar/f12.png"/>--></b>
				       	   	   <i>车型对比</i>
				       	   </li>
				       	   <li>
				       	   	    <b><img src="../assets/images/findcar/12.png"/></b>
				       	   	    <i>购车计算器</i>
				       	   </li>
				       	   <li>
				       	    	<b><img src="../assets/images/findcar/13.png"/></b>  
				       	   	    <i>二手车估价</i>
				       	   </li>
				       	   <li>
				       	    	<b><img src="../assets/images/findcar/14.png"/></b>  
				       	   	    <i>二手车估价</i>
				       	   </li>
				       	   <li>
				       	   	   <b><img src="../assets/images/findcar/15.png"/></b>
				       	   	   <i>车型对比</i>
				       	   </li>
				       	   <li>
				       	   	    <b><img src="../assets/images/findcar/16.png"/></b>
				       	   	    <i>购车计算器</i>
				       	   </li>
				       	   <li>
				       	    	<b><img src="../assets/images/findcar/17.png"/></b>  
				       	   	    <i>二手车估价</i>
				       	   </li>
				       	   <li>
				       	    	<b><img src="../assets/images/findcar/18.png"/></b>  
				       	   	    <i>二手车估价</i>
				       	   </li>
			</ul>
			
	    </div>		
	</div>
</template>
<script>
//	import { Grid, GridItem, GroupTitle } from 'vux'
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
		},

		mounted(){
//			this.$http({
//				method:"get",
//				url:"http://route.showapi.com/1264-2",
//				params:{
//					showapi_appid:'49264',
//					showapi_sign:'e960fd63fa164736972a56fd414882cb',
//					brandName:'宝马'
//				}
//			}).then((data)=>{
//				console.log(data)
//				var thisdata = data.data.showapi_res_body.data
//				this.datalist = thisdata;
//				console.log(thisdata)
//			})
		}
	}
	
</script>

<style>
	/*头部*/
	.top_photo{height:3.2rem}
	.find_huo{width: 100%;background: #f6f6f6;padding:3%;overflow: hidden;font-size: 0.2rem;}
	.find_huo .huo_tital{width:45%;float: left;background: #fff;height: 2rem;}
	.find_huo .huo_tital img{width: 30%;float: left;margin-right: 4px;margin:10% 5%;}
	.find_huo .huo_tital p{float:left;width: 50%;}
	.find_huo .huo_tital p b{display: block;margin-top:12%;}
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
    .find_server{width: 100%;display: flex;flex-wrap:wrap;}
    .find_server li{width:25%;border: 1px solid #ccc;box-sizing: border-box;text-align: center;}
    .find_server li b{width:70%;margin: 0 auto;height:1rem;display:block;line-height: 1rem;padding-top: 0.2rem;overflow: hidden;background: cover;}
    .find_server li img{width:60%;margin: 0 auto;}
    .find_server li i{font-size:0.1rem;font-weight: 100;}
    
    
    .server_title{}
</style>