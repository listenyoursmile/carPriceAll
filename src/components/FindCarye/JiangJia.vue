<template>
	<div>
		 <x-header class="carimg">降价排行</x-header>
		<div>
			<ul>
				<li v-for="data in pricelist" class="cars">
					<i><img :src="data.imgLogo" /></i>
					<p>
						<b>{{data.brandName}}</b>
					    <em>{{data.price}}</em>
					</p>
					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {XHeader} from 'vux'
	import Headers from '@/components/Headers'
	export default {
		name:"JiangJia",
		components: {
			XHeader,Headers
		},
		data(){
			return{
				pricelist:[]
				
			}
		},
		 mounted(){
	    	this.$http({
	    		method:'get',
	    	    url:"/static/photo.json"	
	    	}).then((data)=>{
//	    		console.log(data.data)
	    		data.data.map((data,index)=>{
//	    			console.log(data)
	    			data.map((data,index)=>{
	    				console.log(data)
	    				this.pricelist.push(data);
	    			})
	    		})
	    		
	    		
	    	})
	    	
	    },
	    
	    
		methods:{
			
			
		}
	}
</script>

<style>		
	.carimg{background: url(../../assets/images/header-bg.jpg));background-size:cover;height: 1.5rem;overflow: hidden;
	}
   .cars{width: 100%;overflow: hidden;border-bottom: 1px solid #ccc;padding: 4px 0;}
   /*.cars b{width: 10%;float: left;line-height: 2rem;height: 2rem;}*/
   .cars i{float: left;height: 2rem;width: 30%;}
   .cars i img{height: 2rem;}
   .cars p{float:left;width: 70%;}
   .cars p b{display: block;font-size: 0.3rem;line-height:1rem;}
   .cars p em{display: block;color: red;}
   
   
</style>


	    