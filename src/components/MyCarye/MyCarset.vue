<template>
	<div>
		<x-header class="carimg">设置</x-header>
		<group>
			<div><cell title="购车地区" value="上海" is-link></cell></div>
			<div><cell title="消息推送" value="汽车头条，摇号查询，专家专区" is-link></cell></div>
		</group>
		<group gutter="0.6rem">
		<x-switch title="3G/2G浏览低请图"></x-switch>
		<cell title="清除缓存图片" value="0M" value-text-align="right"></cell>
		</group>
		<group>
			<div><cell title="经销商加盟" is-link></cell></div>
			<div><cell title="检查版本更新" is-link></cell></div>
			<div><cell title="关于" is-link></cell></div>
		</group>
		<button @click="quit" v-bind:class="{showBack:isTrue}" class="mycarshowBack">退出登陆</button>
	</div>
</template>

<script>
	import { XHeader,Group,Cell,XSwitch } from 'vux'
	export default{
		name:'SecondCar',
		components: {
			XHeader,
			Group,
			Cell,
			XSwitch
		},
		data(){
			return {
			isTrue:true	
			}
		
		},
		methods:{
			
			//退出登陆
			quit:function(){
				this.$store.commit('changeLogin','0')
				this.isTrue=true
			}
		},
		mounted(){
			if(this.$store.state.isLogin==0){
				this.isTrue=true
			}else{
				this.isTrue=false
			}
		},
	}
</script>
<style>
	.carimg{
		background: url(../../assets/images/header-bg.jpg);
		background-size:cover;
		height: 1.5rem;
		overflow: hidden;
	}
	.showBack{
		display: none;
	}
	.mycarshowBack{
		margin-top: 0.45rem;
		background: #fff;
		border: none;
		width: 100%;
		height: 1.34rem;
		line-height: 1.34rem;
		color: #ff4f53;
		text-align: center;
	}
	.weui-cell__ft{
		color: #3091EA !important;
	}
</style>