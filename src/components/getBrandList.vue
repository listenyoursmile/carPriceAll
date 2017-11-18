<template>
	<div>
		<div class="sideList">
			<div class="shapeOutside"></div>
			<ul class="brandListNav">
				<li v-for="i in code" @click="selectJup()" class="second_select">{{i}}</li>
			</ul>
		</div>
		<ul v-for="(items,index) in brandList" @touchstart="ccc">
			<li :id="code[index]" :class="code[index]">{{code[index]}}</li>
			<li v-for="item in items">
				<img :src="item.imgLogo" class="brandLogo" /> 
				<span class="brandName">{{item.brandName}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	
	export default {
		name:'brandList',
		components:{},
		data(){
			return {
				brandList:[],
				code:[]
			}
		},
		mounted(){
		//按首字母获取品牌列表
		var iList = new Set()
		  this.$http({
				method:'get',
				dataType:'json',
				url:"/static/brandlist.json"
			}).then((data)=>{
				this.brandList = data.data
				
				for(var i=0 ;i<26;i++){
					let iCode = String.fromCharCode(65+i);
					if(iCode==='E'||iCode==="I"||iCode==="U"||iCode==="V"){
					}else{
						this.code.push(iCode);	
					}
				}
			})
		},
		methods:{
			selectJup(){
				
				
		 		let iInedx = event.target.innerText
		 		let jump = document.getElementsByClassName(iInedx)[0];
			    // 获取需要滚动的距离
			    let iTop = jump.offsetTop-70;
			    
			    let oShape = document.getElementsByClassName('shapeOutside')[0]
			    console.log(oShape)
			    console.log(event.target.offsetTop)
				oShape.style.top = event.target.offsetTop - oShape.offsetHeight/2 +'px'
			    
			    document.documentElement.scrollTop = iTop
		 },
		 ccc(){
		 	console.log(1)
		 }
		}
	}
</script>

<style>
	ul li{
		overflow: hidden;
	}
	.brandLogo{
		float: left;
	}
	.brandName{
		float: left;
	}
	.sideList{
		width: 40vw;
		position: fixed;
		right: 0;
		top: 30px;
	}
	.brandListNav{
		text-align: right;
	}
	.shapeOutside{
		/*display: none;*/
		float: right;
		margin-top: 400px;
		width: 20vw;
		height: 30%;
		shape-outside: ellipse(25% 10%);
		-webkit-shape-outside: ellipse(80% 10% at 90% 50%)
	}
</style>