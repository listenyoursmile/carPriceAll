

<template>	
	<div>
		<x-header class="Bao_title" >爆款推荐</x-header>
		<div class="daojishi">
			
			<group class="jishibiao">
		      <cell  v-model="value" >
		        <countdown v-model="time1" @on-finish="finish" v-show="show"></countdown>
		      </cell>
		    </group>
			<b>距离结束时间</b>
		</div>
		<div class="Bao_luobo">
			<swiper>		
				<swiper-slide>
					<img src="../../assets/images/findcar/24.png"/>
				</swiper-slide>
				<swiper-slide>
					<img src="../../assets/images/findcar/25.png"/>
				</swiper-slide>
				<swiper-slide>
					<img src="../../assets/images/findcar/26.png"/>
				</swiper-slide>
	      </swiper>
		</div>
		<div>
			<group>    
		      <cell-box is-link class="xiang">
		         <b>半价车</b><i>下单优惠啦，赶紧购买吧，抓紧时机啊！抢购呀，机不可失</i>
		      </cell-box>
		      <cell-box is-link  class="xiang">
		          <b>半价车</b><i>下单优惠啦，赶紧购买吧，抓紧时机啊！抢购呀，机不可失</i>
		      </cell-box>
		      <cell-box is-link  class="xiang">
		          <b>半价车</b><i>下单优惠啦，赶紧购买吧，抓紧时机啊！抢购呀，机不可失</i>
		      </cell-box>
		      <cell-box is-link  class="xiang">
		          <b>半价车</b><i>下单优惠啦，赶紧购买吧，抓紧时机啊！抢购呀，机不可失</i>
		      </cell-box>
		      <cell-box is-link  class="xiang">
		          <b>半价车</b><i>下单优惠啦，赶紧购买吧，抓紧时机啊！抢购呀，机不可失</i>
		      </cell-box>
		    </group>
		</div>
		<div>
			<group>    
		      <cell-box is-link class="xiang2">
		         <b>定金：<em>不加购物车定金可退</em></b>
		      </cell-box>
		      <cell-box is-link  class="xiang2">
		          <b>定金：活动期间定金可以享受优惠</b>
		      </cell-box>
		      <cell-box is-link  class="xiang2">
		          <b>下单：优惠啦，赶紧购买吧，抓紧时机啊！抢购呀，机不可失</b>
		      </cell-box>
		      <cell-box is-link  class="xiang2">
		          <b>参与：优惠啦，赶紧购买吧，抓紧时机啊！抢购呀，机不可失</b>
		      </cell-box>
		       <cell-box is-link  class="xiang2">
		          <b>支持：<i>易优惠券</i></b>
		      </cell-box>
		    </group>
		</div>
        <div>
       
        	<div>
        		 <tab>
			      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
			      <tab-item @on-item-click="onItemClick">未发货</tab-item>
			      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
			    </tab>
        	</div>
        	 <div>
		       <tab :line-width=2 active-color='#fc378c' v-model="index">
		        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
		      </tab>
		      <swiper v-model="index" height="100px" :show-dots="false">
		        <swiper-item v-for="(item, index) in list2" :key="index">
		          <div class="tab-swiper vux-center">{{item}} Container</div>
		        </swiper-item>
		      </swiper>
		    </div>
        </div>
        <div>
        	<p>hhaha </p>
        	<p>hjjaj </p>
        	<p>hhaha </p>
        	<p>hjjaj </p>
        	<p>hhaha </p>
        	<p>hjjaj </p>
        </div>
	</div>
</template>

<script>
	import { Tab, TabItem, Sticky, Divider, XButton,SwiperItem } from 'vux'
	import { Group, Cell, CellBox,XSwitch,Countdown,XHeader} from 'vux'
	import Headers from '@/components/Headers'
	import {swiper,swiperSlide} from "vue-awesome-swiper"
	

    const list = () => ['精选', '美食', '电影', '酒店', '外卖']
	export default {
		name:'Benchi',
		components: {
			XHeader,Headers,swiper,swiperSlide, Group,Cell,CellBox,Countdown,XSwitch,
			  Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
		},
		data(){
			
			return{
				  show: true,
			      time1:360,
			      value: '60',
			      start:true,
					  index01: 0,
				      list2: list(),
				      demo2: '美食',
				      list3: ['收到的消息', '发出的消息'],
				      demo3: '收到的消息',
				      list4: ['正在放映', '即将上映'],
				      demo4: '即将上映',
				      demoDisabled: 'A',
				      index: 0,
				      getBarWidth: function (index) {
				        return (index + 1) * 22 + 'px'
				      }
			}
		},
		methods: {
		    finish (index) {
		      this.show = true
		      this.value = 'completed'
		      console.log('current index', index)
		    },
		  
			    onItemClick (index) {
			      console.log('on item click:', index)
			    },
			    addTab () {
			      if (this.list2.length < 5) {
			        this.list2 = list().slice(0, this.list2.length + 1)
			      }
			    },
			    removeTab () {
			      if (this.list2.length > 1) {
			        this.list2 = list().slice(0, this.list2.length - 1)
			      }
			    },
			    next () {
			      if (this.index === this.list2.length - 1) {
			        this.index = 0
			      } else {
			        ++this.index
			      }
			    },
			    prev () {
			      if (this.index === 0) {
			        this.index = this.list2.length - 1
			      } else {
			        --this.index
			      }
			    }
  
		    
		    
		    
		    
		    
		
		 }
 }
</script>
<style>
	/*.Bao_title{color:black !important;}*/
	.daojishi{margin: 0;padding: 0;width: 100%;overflow: hidden;background: #fff;}
	.daojishi b{line-height: 1.2rem;height: 1.2rem;float:right;color: red;font-size: 0.5rem;}
	.jishibiao{float:right;}
	.weui-cells{margin-top: 0 !important;}
	.Bao_luobo{width: 90%;height: 3rem;padding-left: 10%;background: #fff;}
	.Bao_luobo img{width:80%;height: 3rem;}
	
	/*详情*/
	.xiang {font-size: 0.22rem;}
	.xiang b{color: red;border: 1px solid red;padding: 2px;}
	.xiang i{color: red;display: inline-block;width: 75%;text-align: right;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;color: black;margin-left: 5%;}
	/*详情2*/
	.xiang2 {font-size: 0.22rem;}
	.xiang2 b em{color: red;}
	.xiang2 b i{background: red;padding: 4px;}
	
	.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}



</style>