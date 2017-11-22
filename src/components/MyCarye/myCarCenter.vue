<template>
<div>
	<x-header class="myCarCenter">账号信息</x-header>
	<group gutter="0.6rem">
		<div @click="myCarname">
			<cell title="昵称" :value="myCarname1" is-link ></cell>
		</div>
		<popup-picker title="性别" placeholder="无" :data="list" v-model="value6" value-text-align="right"></popup-picker>
		
      	<datetime v-model="value1" :title="briday" id="mydatetime" @on-change='change'></datetime>
      	

		<div><cell title="我的爱车" :value="mylevocar" is-link></cell></div>

		<div @click="myCarautog"><cell title="签名" :value="autograph" is-link></cell></div>
	</group>
</div>
</template>

<script>
	import { XHeader,Datetime, Group,Cell,PopupPicker } from 'vux'
	export default{
		name:'myCarCenter',
		components:{
			XHeader,
			Datetime,
			Group,
			Cell,
			PopupPicker
		},
		data(){
			return {
				value1: this.$store.state.mytime,
				briday:'生日',
				myCarname1:this.$store.state.userID,
				mylevocar:this.$store.state.mylevocar,
				autograph:this.$store.state.myCarautograph,
				value6:['男'],
				 list: [['男', '女', '暂不选择']]
			}
			
		},
		methods:{
			change(value) {
				this.$store.state.mytime = value
   			},
   			myCarname(){
   				this.$router.push({path:"/MyCar/myCarCenter/myCarname"})
   			},
   			myCarautog(){
   				this.$router.push({path:"/MyCar/myCarCenter/myCarautog"})	
   			}
		}
	}
</script>
<style>
	.myCarCenter{
		background:#fafafa;
		height: 1.5rem;
		overflow: hidden;
	}
	.vux-header .vux-header-title{
		color: #454545;
	}
	.weui-cell{
		height: 1.5rem;
		font-size: 0.5rem;
	}
</style>