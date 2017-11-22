

<template>	
	<div>
		<x-header class="Bao_title" >爆款推荐</x-header>
		<div class="daojishi">
			<b>距离结束时间</b>
			 <group>
		      <cell  v-model="value">
		        <countdown v-model="time1" @on-finish="finish" v-show="show"></countdown>
		      </cell>
		    </group>
			
		</div>
		<div class="Bao_luobo">
			<swiper>		
				<swiper-slide>
					<img src="../../assets/images/findcar/fa1.png"/>
				</swiper-slide>
				<swiper-slide>
					<img src="../../assets/images/findcar/fa2.png"/>
				</swiper-slide>
				<swiper-slide>
					<img src="../../assets/images/findcar/fa2.png"/>
				</swiper-slide>
	      </swiper>
		</div>
		<div>
			<group>
		     
		      <cell-box is-link>
		        cell-box long long long long long long long
		      </cell-box>
		      <cell-box is-link>
		        cell-box long long long long long long long
		      </cell-box>
		    </group>
		</div>
    </div>
</template>

<script>
	
	import { Group, Cell, CellBox,XSwitch,Countdown,XHeader} from 'vux'
	import Headers from '@/components/Headers'
	import {swiper,swiperSlide} from "vue-awesome-swiper"
	export default {
		name:'Benchi',
		components: {
			XHeader,Headers,swiper,swiperSlide, Group,Cell,CellBox,Countdown,XSwitch
		},
		data(){
			return{
				  show: true,
			      time1:360,
			      value: '60',
			      start:true
			}
		},
		methods: {
		    finish (index) {
		      this.show = true
		      this.value = 'completed'
		      console.log('current index', index)
		    }
		   
		 }
 }
</script>
<style>
	/*.Bao_title{color:black !important;}*/
	group{}
	.Bao_luobo{width: 100%;}
	
	.Bao_luobo img{width:100%;}
</style>