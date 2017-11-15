<template>
	<div>
		<!--<group-title>引入swiper-item自定义item内容，用height定义高度</group-title>
	    <swiper auto height="100px">
	      <swiper-item class="black"><img src="http://temp.im/320x320/aaaaaa/fff" width="100%"/></swiper-item>
	      <swiper-item class="black"><img src="http://temp.im/320x320/ff00aa/fff" width="100%"/></swiper-item>
	      <swiper-item class="black"><img src="http://temp.im/320x320/00ffaa/fff" width="100%"/></swiper-item>
	      <swiper-item class="black"><img src="http://temp.im/320x320/aaaaff/fff" width="100%"/></swiper-item>
	      <swiper-item class="black"><img src="http://temp.im/320x320/ffffaa/fff" width="100%"/></swiper-item>
	      <swiper-item class="black"><img src="http://temp.im/320x320/ffaaaa/fff" width="100%"/></swiper-item>
	    </swiper>-->
	    <swiper :options="swiperOption">
		    <swiper-slide :class="{box:true}"><img src="http://temp.im/320x320/aaaaaa/fff" width="100%"/></swiper-slide>
		    <swiper-slide :class="{box:true}"><img src="http://temp.im/320x320/ff00aa/fff" width="100%"/></swiper-slide>
		    <swiper-slide :class="{box:true}"><img src="http://temp.im/320x320/00ffaa/fff" width="100%"/></swiper-slide>
		    <swiper-slide :class="{box:true}"><img src="http://temp.im/320x320/aaaaff/fff" width="100%"/></swiper-slide>
		    <swiper-slide :class="{box:true}"><img src="http://temp.im/320x320/ffffaa/fff" width="100%"/></swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		<div>
			<group>
		      <cell v-for="data in datalist"><router-link :to="{name:'Detail',params:{goodsID:data.goodsID}}">{{data.goodsName}}</router-link></cell>
		    </group>
		</div>
	</div>
</template>

<script>
	import { Group,Cell } from 'vux'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	require('swiper/dist/css/swiper.css')
	export default {
		name:"Info",
		components:{
			swiper,swiperSlide,Group,Cell
		},
		data () {
	      return {
	        swiperOption: {
	          //autoplay: 1000,
	          //loop: true,
	          pagination: '.swiper-pagination'
	          /*initialSlide: 1,
	          onSlideChangeEnd: swiper => {
	            console.log('onSlideChangeEnd', swiper.realIndex)
	          }*/
	        },
	        datalist:[]
	      }
	    },
	    mounted(){
	    	this.$http({
	    		method:'get',
	    		url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback="
	    	}).then((data)=>{
	    		console.log(eval(data.data));
	    		this.datalist = eval(data.data)
	    	})
	    }
		
	}
</script>

<style scoped>
	.box img{
		height: 200px;
		display: block;
	}
</style>