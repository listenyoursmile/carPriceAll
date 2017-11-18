<template>
	<div>
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
	.active-list{width: 100%;}
	.active-list li{background: #f5f5f5;padding-top: 0.1rem;}
	.active-list li b{width: 100%;display: block;}
	.active-list li img{width: 100%;height:3rem;}
	.active-list li p{background: #fff;height:0.8rem;line-height: 0.8rem;text-indent: 2%;color: #cdcdcd;}
	.active-list li:first-child{padding: 0;}
	
</style>