<template>
	<div>
		<Headers>
			<div slot="headers" class="findactive_top">
				<span>返回</span>
				<i>二手车</i>
			</div>
		</Headers>
		<ul class="active-list">
			<li>
				<b><img src="../../assets/images/findcar/fa7.png"/></b>
			    <p>活动</p>
			</li>
			<li>
				<b><img src="../../assets/images/findcar/fa8.png"/></b>
			    <p>活动2</p>
			</li>
			<li>
				<b><img src="../../assets/images/findcar/fa9.png"/></b>
			    <p>活动2</p>
			</li>
			
		</ul>
	</div>
</template>

<script>
	import {XHeader} from 'vux'
	import Headers from '@/components/Headers'
	export default {
		name:"Findactive2",
		components: {
			XHeader,Headers
		},
		data(){
			return{
				datalist:[]
			}
		}
	}
</script>

<style>
	.findactive_top span{float: left;font-size: 0.5rem;line-height: 1.5rem;height:1.5rem;margin-left: 4%;}
	.findactive_top i{line-height: 1.5rem;height:1.5rem;font-size: 0.5rem;font-weight: bold;}
	.active-list{width: 100%;margin-top: 1.5rem;overflow: hidden;}
	.active-list li{background: #f5f5f5;padding-top: 0.1rem;}
	.active-list li b{width: 100%;display: block;}
	.active-list li img{width: 100%;height:3rem;}
	.active-list li p{background: #fff;height:0.8rem;line-height: 0.8rem;text-indent: 2%;color: #cdcdcd;}
	.active-list li:first-child{padding: 0;}
	
</style>