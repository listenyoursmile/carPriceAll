<template>
	<div>
		 <x-header class="carimg">降价排行</x-header>
		 <div>
		 	<ul class="jiangbtn">
		 		<li>品牌</li>
		 	    <li @click="listchange()">降价排行</li>
		 	</ul>
		 </div>
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
//	    				console.log(data)
	    				this.pricelist.push(data);
	    					
	    			})
	    		})
	    		
	    		
	    	})
	    	
	    },   
		methods:{	
			listchange(){
				var data = this.pricelist;
				var lengths=data.length
				for(var i=0;i<lengths-1;i++){ 					
	    				for(var j=0;j<lengths-i-1;j++){
								if(JSON.parse(data[j].price)>JSON.parse(data[j+1].price)){
									var that=data[j];
									    data[j]=data[j+1];
									    data[j+1]=that;
								}
	    				}	
	    			
	    	}

			  this.pricelist = data
				var i=[];
				this.pricelist.forEach(function(v){
					i.push(v)
				})
//				console.log(i.price)
				this.pricelist=i;	
			}		
		}
	}
</script>

<style>		
	.carimg{background: url(../../assets/images/header-bg.jpg));background-size:cover;height: 1.5rem;overflow: hidden;
	}
	/*降价*/
	.jiangbtn{width:100%;display: flex;border-bottom: 1px solid #ccc;width: 80%;padding: 4px 10%;}
	.jiangbtn li{border:1px solid #ccc;font-size: 0.3rem;border-radius: 5px;margin:4px;padding: 4px;}
	
	
   .cars{width:80%;overflow: hidden;border-bottom: 1px solid #ccc;padding: 4px 10%;}
   /*.cars b{width: 10%;float: left;line-height: 2rem;height: 2rem;}*/
   .cars i{float: left;height: 2rem;width: 30%;}
   .cars i img{height: 2rem;}
   .cars p{float:left;width: 70%;}
   .cars p b{display: block;font-size: 0.3rem;line-height:1rem;}
   .cars p em{display: block;color: red;}
   
   
</style>


	    