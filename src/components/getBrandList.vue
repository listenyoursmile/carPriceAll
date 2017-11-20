<template>
	<div>
		<div class="sideList">
			<div class="shapeOutside"></div>
			<ul class="brandListNav" @touchstart="brandListStart()" @touchmove.prevent="brandListMove()" @touchend="brandListEnd()">
				<li v-for="i in code" class="second_select">{{i}}</li>
			</ul>
		</div>
		<ul v-for="(items,index) in brandList">
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
			window.addEventListener('scroll', this.handleScroll)
		},
		methods:{
			handleScroll () {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				var iH = $('.swiper-container').height()
				if(scrollTop <= iH){
					let iOpacity = scrollTop/iH
					$('.headers').css('opacity',iOpacity)
//					console.log()
				}else{
					$('.headers').css('opacity',1)
				}
			},
			brandListStart(){
				let oShape = document.getElementsByClassName('shapeOutside')[0];
				oShape.style.display = "block";
			 	
	//		 	JumP
			 	let iInedx = event.target.innerText
		 		let jump = document.getElementsByClassName(iInedx)[0];
			    // 获取需要滚动的距离
			    let iTop = jump.offsetTop-50;
			    document.documentElement.scrollTop = iTop
			    
				oShape.style.marginTop = (event.touches[0].clientY)*2-(document.body.clientHeight)*0.3 +'px'
	
			},
			brandListMove(){
			 	event.cancelBubble
			 	let oShape = document.getElementsByClassName('shapeOutside')[0];
			 	oShape.style.marginTop = (event.touches[0].clientY)*2-(document.body.clientHeight)*0.3 +'px'
			 	
	//		 	获取当前划过元素
				var iH = event.touches[0].pageY - $('.sideList').offset().top
				var iLiH = $('.brandListNav li').first().height()
				let iJump = this.code[Math.round(iH/iLiH)]
	//			let iInedx = event.target.innerText
		 		let jump = document.getElementsByClassName(iJump)[0];
			    // 获取需要滚动的距离
			    if(jump){
			    	let iTop = jump.offsetTop-50;
			    	document.documentElement.scrollTop = iTop		    	
			    }
			},
			brandListEnd(){
			 	let oShape = document.getElementsByClassName('shapeOutside')[0];
			 	oShape.style.display = "none";
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
		z-index: 100;
		width: 20vw;
		position: fixed;
		right: 0px;
		top: 14%;
	}
	.brandListNav{
		padding-right: 10px;
		text-align: right;
	}
	.brandListNav li{
		line-height: 0.54rem;
	}
	.shapeOutside{
		float: right;
		width: 20vw;
		height: 30%;
		shape-outside: ellipse(25% 10%);
		-webkit-shape-outside: ellipse(14vw 12vw at 90% 50%)
	}
</style>