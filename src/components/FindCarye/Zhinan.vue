<template>
	<div>
		 <x-header class="carimg">指南者</x-header>	
		 <div>
		 	<ul class="zhinan_title">
		 		<li>综述</li>
		 		<li>降价</li>
		 		<li>口碑</li>
		 		<li>文章</li>
		 		<li>经销商</li>
		 	</ul>
		 </div>
		 <div>
		 	<swiper  class="zhi_luobo">
				<swiper-slide>
					<img src="../../../static/images/findcar/24.png"/>
				</swiper-slide>
				<swiper-slide>
					<img src="../../../static/images/findcar/25.png"/>
				</swiper-slide>
				<swiper-slide>
					<img src="../../../static/images/findcar/27.jpg"/>
				</swiper-slide>
				<div class="swoper-pagination"></div>
		    </swiper>
		 </div>
		 <div class="zhi_dao">
		 	<p>价格：<i>231万</i></p>
		 	<p>指导价格：15-23万|中国suv</p>
		 	<ul>
		 	   <li>带宽</li>
		 	   <li>询问价</li>
		 	   <li>置换</li>
		 	</ul>
		 </div>
		 <div class="wenjia">
		 	<ul>
		 		<li v-for="data in pricelist" class="wenjia">
		 			<p><i>2017年款</i><b>{{data.price}}万起</b></p>
				 	<p><i>143马达，手动挡</i><b>指导价：{{data.price/2+10}}万起</b></p>
				 	<p><i>对比</i><b>询问价</b></p>
		 		</li>
		 	</ul>
		 	
		 </div>
	    <div class="xiaoshou">
	    	<img src="../../assets/images/banner2.jpg" alt="" />
	    	<p><b>金牌销售</b><i>一对一服务</i></p>
	    	<em><strong>找销售</strong></em>
	    </div>
	</div>
</template>

<script>
	import {XHeader} from 'vux'
	import Headers from '@/components/Headers'
	import {swiper,swiperSlide} from "vue-awesome-swiper"
	export default {
		name:"Zhinan",
		components: {
			XHeader,Headers,swiper,swiperSlide
		},
		
		data(){
			return{
				pricelist:[]
				
			}
		},
		 mounted(){
	    	this.$http({
	    		method:'get',
	    	    url:"/static/photo.json"	
	    	}).then((data)=>{
//	    		console.log(data.data)
	    		data.data.map((data,index)=>{
//	    			console.log(data)
	    			data.map((data,index)=>{
//	    				console.log(data)
	    				this.pricelist.push(data);
	    					
	    			})
	    		})
	    		
	    		
	    	})
	    	
	    },   
		methods:{	
			listchange(){
				var data = this.pricelist;
				var lengths=data.length
				for(var i=0;i<lengths-1;i++){ 					
	    				for(var j=0;j<lengths-i-1;j++){
								if(JSON.parse(data[j].price)>JSON.parse(data[j+1].price)){
									var that=data[j];
									    data[j]=data[j+1];
									    data[j+1]=that;
								}
	    				}	
	    			
	    	}

			  this.pricelist = data
				var i=[];
				this.pricelist.forEach(function(v){
					i.push(v)
				})
//				console.log(i.price)
				this.pricelist=i;	
			}		
		}
		
	}
</script>
<style>		
	.carimg{background: url(../../../static/images/header-bg.jpg));background-size:cover;height: 1.5rem;overflow: hidden;
	}
   .zhinan_title{width:100%;}
   .zhinan_title li{float: left;width: 20%;text-align: center;border: 1px solid #ccc;box-sizing: border-box;padding: 5px 0;color: red;font-size: 0.3rem;font-weight: bold;}
   
   .zhi_luobo{width: 100%;}
   .zhi_luobo img{width: 100%;height:4rem;}
   
   .zhi_dao p{color:red;font-size: 0.4rem!important;font-weight: bold;background: #eee;padding:6px 0;}
   .zhi_dao p:nth-child(2){color:#ccc;border-top: 1px solid #ccc;}
   .zhi_dao ul{width:90%;margin: 5px auto;overflow: hidden;}
   .zhi_dao ul li{float: left;width: 33%;text-align: center;border: 1px solid #ccc;padding: 6px 0;box-sizing: border-box;}
   /*问价*/
    .wenjia{border-bottom: 1px solid #eee;padding: 4px 0;}
    .wenjia p{display: flex;justify-content: space-between;padding: 2px 5%;width: 90%;font-size: 0.4rem;}
    .wenjia p:nth-child(1) i{font-weight: bold;}
    .wenjia p:nth-child(1) b{color:red;}
    .wenjia p:nth-child(2){color: #ccc;}
    .wenjia p:nth-child(3){color: #1c88eb;}
    .wenjia p:nth-child(3) b{border: 1px solid #1c88eb;padding:2px 6px;border-radius: 5px;}
    .xiaoshou{width: 100%;border-top: 1px solid #ccc;display: flex;text-align: center;margin: 4px 0 1.5rem 0;}
    .xiaoshou img{width: 30%;height: 2rem;}
    .xiaoshou p{height: 2rem;width:20%;display: flex;flex-direction: column;justify-content: space-around;}
    .xiaoshou em{height: 2rem;width:40%;color: #1C88EB;font-size: 0.5rem;font-weight: bold;}
      .xiaoshou em strong{border: 1px solid #0086B3;padding:5px;display: inline-block;margin-top: 10%;border-radius: 5px;}
    
</style>