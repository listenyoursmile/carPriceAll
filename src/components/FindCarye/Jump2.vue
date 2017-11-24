<template>
	<div>
		 <x-header class="carimg">
		 	发现
		 </x-header>
		<ul class="active-list">
			
			<li>
				<router-link to="/Findactive/Findactivechild">
					<b><img src="../../../static/images/findcar/fa1.png"/></b>
				    <p>活动</p>
			    </router-link>
			</li>
			
			<li>
				<router-link to="/Findactive/Findactivechild">
				<b><img src="../../../static/images/findcar/fa2.png"/></b>
			    <p>活动2</p>
			     </router-link>
			</li>
			<li>
				<router-link to="/Findactive/Findactivechild">
				<b><img src="../../../static/images/findcar/fa3.png"/></b>
			    <p>活动2</p>
			     </router-link>
			</li>
			<li>
				<router-link to="/Findactive/Findactivechild">
				<b><img src="../../../static/images/findcar/fa4.png"/></b>
			    <p>活动2</p>
			     </router-link>
			</li>
			<li>
				<router-link to="/Findactive/Findactivechild">
				<b><img src="../../../static/images/findcar/fa5.png"/></b>
			    <p>活动2</p>
			     </router-link>
			</li>
			<li>
				<router-link to="/Findactive/Findactivechild">
				<b><img src="../../../static/images/findcar/fa6.png"/></b>
			    <p>活动2</p>
			     </router-link>
			</li>
		</ul> 		
	</div>
</template>

<script>
	import {XHeader} from 'vux'
	import Headers from '@/components/Headers'
	export default {
		name:"Findactive",
		components: {
			XHeader,Headers
		},
		data(){
			return{
				datalist:[]
			}
		},
		methods:{
			
		}
	}
</script>

<style>		
	.carimg{background: url(../../../static/images/header-bg.jpg));background-size:cover;height: 1.5rem;overflow: hidden;
	}
    .active-list{width: 100%;overflow: hidden;}
	.active-list li{background: #f5f5f5;padding-top: 0.1rem;}
	.active-list li b{width: 100%;display: block;}
	.active-list li img{width: 100%;height:3rem;}
	.active-list li p{background: #fff;height:0.8rem;line-height: 0.8rem;text-indent: 2%;color: #cdcdcd;}
	.active-list li:first-child{padding: 0;}
</style>