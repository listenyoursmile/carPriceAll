<template>
	<div>
		<div class="sideList">
			<div class="shapeOutside"></div>
			<ul class="brandListNav" @touchstart="brandListStart()" @touchmove.prevent="brandListMove()" @touchend="brandListEnd()">
				<li v-for="i in code" class="second_select">{{i}}</li>
			</ul>
		</div>
		<ul v-for="(items,index) in brandList" class="brand_ul">
			<li :id="code[index]" :class="code[index]">{{code[index]}}</li>
			<li v-for="item in items" class="brands">
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
				this.brandList = data.data;
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
					$('.new_headers').css('opacity',iOpacity)
//					console.log()
				}else{
					$('.new_headers').css('opacity',1)
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
	.sideList{
		z-index: 100;
		position: fixed;
		right: 0px;
		top: 14%;
		color: #666;
	}
	.brandListNav{
		text-align: right;
	}
	.brandListNav li{
		padding-right: 6px;
		line-height: 0.58rem;
	}
	.brands img{
		float: left;
	}
	.shapeOutside{
		display: none;
		float: right;
		width: 20vw;
		height: 30%;
		shape-outside: ellipse(25% 10%);
		-webkit-shape-outside: ellipse(14vw 12vw at 90% 50%)
	}
	.brand_ul{
		background: #fff;
		padding:0 0.45rem;
	}
	.brand_ul li{
		font-size: 0.44rem;
		line-height: 1.6rem;
		border-bottom: 1px solid #f0f0f0;
	}
	.brand_ul li:first-child{
		padding-top: 0.32rem;
		line-height: 0.7rem;
		font-size: 0.42rem;
		color: #000;
		/*font-weight: bold;*/
		border-bottom: none;
	}
	.brand_ul li img{
		width: 1.08rem;
		margin-top: 0.25rem;
		margin-right: 0.5rem;
	}
</style>