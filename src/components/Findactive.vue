<template>
	<div>
		<ul>
			<li>
				<img src="../../assets/images/findcar/fa1.png" alt="" />
			<p>活动</p>
			</li>
			<li>
				<img src="../../assets/images/findcar/fa2.png" alt="" />
			<p>活动2</p>
			</li>
		</ul>
			
		
	</div>
</template>

<script>
	import {XHeader} from 'vux'
	export default {
		name:"Findactive",
		components: {
			XHeader,Headers
		},
		data(){
			retrun{
				datalist:[]
			}
		}
	}
</script>

<style>
	
</style>