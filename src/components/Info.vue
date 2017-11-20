<template>
	<div class="infomain">
		<router-view></router-view>
		<Footers></Footers>
	</div>
</template>
<script>
	import { Group,Cell } from 'vux'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import Footers from '@/components/Footers'

	
	require('swiper/dist/css/swiper.css')
	export default {
		name:"Info",
		components:{
			swiper,swiperSlide,Group,Cell,Footers		
		},
		data () {
	      return {
	        swiperOption: {
	          autoplay: 1000,
	          loop: true,
	          pagination: '.swiper-pagination'
	          /*initialSlide: 1,
	          onSlideChangeEnd: swiper => {
	            console.log('onSlideChangeEnd', swiper.realIndex)
	          }*/
	        },
	        datalist:[]
	      }
	    }/*,
	    mounted(){
	    	this.$http({
	    		method:'get',
	    		url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback="
	    	}).then((data)=>{
	    		console.log(eval(data.data));
	    		this.datalist = eval(data.data)
	    	})
	    }*/
		
	}
</script>

<style>
	.box img{
		height: 200px;
		display: block;
	}
	.infomain{
		height: 100%;
	}
</style>