<template>
	<div>
		<!--<Headers></Headers>-->
		<p><img src="../assets/images/f1.jpg" alt="" class="top_photo"  /></p>	
		<div class="find_huo">
			<div class="huo_tital huo_one">
				<img src="../assets/images/mycar/f2.png" alt="" />
				<p>
					<b>活动专区</b>
				    <i>豪送5万元京东卡</i>
				</p>	
			</div>
			<div class="huo_tital">
				<img src="../assets/images/mycar/f3.jpg" alt="" />
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
				    
				      	   <group-title></group-title>
						    <grid :cols="4" v-for="data in datalist">	
						      <grid-item v-for="i in 8" :key="i">
						        <span class="grid-center">
						        	<img src="../assets/images/mycar/f4.png"/>
						        	<i>{{data.seriesRecordId}}</i>
						        </span>
						      </grid-item>
						    </grid>
				      
				</swiper-slide>
				<swiper-slide>
				
				      	   <group-title></group-title>
						    <grid :cols="4">
						      <grid-item v-for="i in 4" :key="i">
						        <span class="grid-center">{{i}}</span>
						      </grid-item>
						    </grid>
				      <!--<img src="../assets/App.vue/1.jpg"/>-->
				</swiper-slide>
				<div class="swoper-pagination"></div>
			</swiper>
		</div>
		
	</div>
</template>
<script>
	import { Grid, GridItem, GroupTitle } from 'vux'
	import { XHeader } from 'vux'
	import Headers from '@/components/Headers'
	import {swiper,swiperSlide} from "vue-awesome-swiper"
	export default {
		name:'FindCar',
		components: {
			XHeader,Headers,swiper,swiperSlide,Grid, GridItem, GroupTitle 
		},
		data(){
			return{
				datalist:[]
			}
		},
		mounted(){
			this.$http({
				method:"get",
				url:"http://route.showapi.com/1264-2",
				params:{
					showapi_appid:'49264',
					showapi_sign:'e960fd63fa164736972a56fd414882cb',
					brandName:'宝马'
				}
			}).then((data)=>{
				console.log(data)
				var thisdata = data.data.showapi_res_body.data
				this.datalist = thisdata;
				console.log(thisdata)
			})
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
	/*选项卡*/
    .find_luobo{height:7.5rem;}
    .find_luobo p{height:1rem;line-height: 1rem;font-size: 0.3rem;font-weight: bold;padding: 0 5%;}
       .find_luobo grid-item img{width: 100%;height:0.5rem;}
    .grid-center{display: block;text-align: center;color: #666;}
</style>