<template>
	<div class="secondcar">
		<Headers>
			<div slot="headers">
				<span class="new_hs_left">上海</span>
				<div class="new_hs_right"><p style="line-height: 1.5rem;font-size: 0.5rem;font-weight: bold;padding-right: 1.5rem;">二手车</p></div>
			</div>
		</Headers>
		  <div class="second_contentbox">
			<div class="nav">
			    <router-link class="nav_left" to="/Helpbuys">
					<img src="../assets/images/secondcar-1.png"/>
					<div>
						<h3>帮买二手车</h3>
						<p>专家陪伴购车</p>
					</div>
			    </router-link>
			    <router-link class="nav_right" to="/Helpsell"> 
					<img src="../assets/images/secondcar-2.png"/>
					<div>
						<h3>帮您卖车</h3>
						<p>上门估车卖高价</p>
					</div>
			    </router-link>
			</div>
			<div class="second_content">
				<ul class="second_select">
					<li class="second_jump" @click="selectJup()"><router-link to="/Brand"><i>品牌</i><span class="iconfont icon-xialajiantouxiangxia"></span></router-link></li>
					<li class="second_jump" @click="selectJup()">
						<i>价格</i><span class="iconfont icon-xialajiantouxiangxia"></span>
						<div class="Price_sort" style="display: none;">
							<router-link to="/">从低到高</router-link>
						</div>
					</li>
					<li class="second_jump" @click="selectJup()"><i>筛选</i><span class="iconfont icon-xialajiantouxiangxia"></span></li>
					<li class="second_jump" @click="selectJup()"><i>排序</i><span class="iconfont icon-xialajiantouxiangxia"></span></li>
				</ul>
			<v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
				<ul class="second_list">
					<li v-for="data in datalist">
						<router-link :to="{name:'Detail',params:{serieName:data.serieName,brandName:data.brandName,priceScope:data.priceScope}}">
							<img :src='data.imgLogo' />
							<div class="second_instro">
								<h3>{{data.serieName}}</h3>
								<div class="second_info">
									<div>
										<p><em>2013年</em> | <b>1.9万公里</b></p>
										<h4>{{data.priceScope}}</h4>
									</div>
									<div class="second_or">北京商家</div>
								</div>
							</div>
						</router-link>
					</li>
					<li v-for="data in downdata">
						<router-link :to="{name:'Detail',params:{seriesRecordId:data.seriesRecordId}}">
							<img :src='data.imgLogo' />
							<div class="second_instro">
								<h3>{{data.serieName}}</h3>
								<div class="second_info">
									<div>
										<p><em>2013年</em> | <b>1.9万公里</b></p>
										<h4>{{data.priceScope}}</h4>
									</div>
									<div class="second_or">北京商家</div>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
			</v-scroll>
		</div>
		</div>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	import Headers from '@/components/Headers'
	import Scol from '@/components/Scol'
	
	export default{
		name:'SecondCar',
		components:{
			Headers,XHeader,
			'v-scroll': Scol
		},
		data(){
			return {
				counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
			    num : 15,  // 一次显示多少条
			    pageStart : 0, // 开始页数
			    pageEnd : 0, // 结束页数
			    datalist:[],// 下拉更新数据存放数组
			    downdata: []  // 上拉更多的数据存放数组
			}
		},
		mounted(){
			this.getList();
		},
		 methods: {
		 	selectJup(){
		 		 let jump = document.getElementsByClassName('second_content')[0];
		 		 let total = jump.offsetTop - 50; 
		 		 var i = 0;
		 		 var iTimer = setInterval(function(){
		 		 	jump.style.top = i + "px";
		 		 	if( i< -total){
		 		 		clearInterval(iTimer);
		 		 	}
		 		 	i = i-10;
		 		 },10)
			    // 获取需要滚动的距离
			    //console.log(i.offsetHeight)
			    //jump.style.top = -68 + "px";
			    
			    
			    // Chrome
//			    document.body.scrollTop = total
			    // Firefox
//			    document.documentElement.scrollTop = total		
			    // Safari
//			    window.pageYOffset = total
			    
		 	},
		    getList(){
		       let vm = this;
		      vm.$http({
					method:"get",
					url:"http://route.showapi.com/1264-2",
					params:{
						showapi_appid:'49264',
						showapi_sign:'e960fd63fa164736972a56fd414882cb',
						brandName:'宝马'
					}
				}).then((data)=>{
					this.datalist = data.data.showapi_res_body.data.slice(0,15);
				})
			},
		    onRefresh(done) {
		             this.getList()
		       
		             done() // call done
		      
		    },
		    onInfinite(done) {
		              let vm = this;
		              vm.$http({
						method:"get",
						url:"http://route.showapi.com/1264-2",
						params:{
							showapi_appid:'49264',
							showapi_sign:'e960fd63fa164736972a56fd414882cb',
							brandName:'宝马'
						}
					}).then((data)=>{
						vm.datalist = data.data.showapi_res_body.data.slice(0,15);
						console.log(data.data.showapi_res_body.data);
						vm.counter++;
		                  vm.pageEnd = vm.num * vm.counter;
		                  vm.pageStart = vm.pageEnd - vm.num;
		                  let arr = data.data.showapi_res_body.data;
		                     let i = vm.pageStart;
		                     let end = vm.pageEnd;
		                     for(; i<end; i++){
		                        //let obj ={};
		                        //obj["name"] = arr[i].name;
		                        vm.downdata.push(arr[i]);
		                         if((i + 1) >= data.data.showapi_res_body.data.length){
		                          this.$el.querySelector('.load-more').style.display = 'none';
		                          return;
		                         }
		                        }
		                  done() // call done
					})
		           }
		  }
	}
</script>
<style scoped>
	.headers{
		opacity: 1 !important;
		z-index: 10;
	}
	.secondcar{
		height: 100%;
	}
	.second_contentbox{
		position: fixed;
		padding-top: 1.5rem;
		width: 100%;
		height: 100%;
	}
	.second_content{
		position: relative;
		height: 100%;
	}
	.child-view{
		height: 100%;
	}
	.yo-scroll{
		height:100%;
		padding-bottom: 2rem;
	}
	.nav{
	   
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 2.03rem;
		background-color: #f7f3f0;
		
	}
	.nav .nav_right,.nav .nav_left{
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		width: 4.5rem;
		height: 1.62rem;
		padding-right: 0.6rem;
		border-radius: 0.12rem;
	}
	.nav .nav_right{
		margin-right: 0.15rem;
	}
	.nav .nav_left{
		margin-left: 0.15rem;
	}
	.nav .nav_right img,.nav .nav_left img{
		height: 1.1rem;
		
	}
	.nav h3{
		font-size: 0.5rem;
		padding: 0;
		margin: 0;
		color: #1498fd;
	}
	.nav p{
		font-size: 0.4rem;
		color: #989898;
	}
	
	.second_select{
		display: flex;
		width: 100%;
		justify-content: space-around;
		align-items: center;
		font-size: 0.5rem;
		height: 1.26rem;
		background: #fff;
		position: absolute;
		z-index: 100;
	}
	.second_select .Price_sort{
		position: absolute;
		bottom: 0;
	}
	.second_select i{
		margin-right: 0.12rem;
		color: #6d6d6d;
	}
	.second_select span{
		color: #d7d7d7;
	}
	
	.second_list li a{
		display: block;
		background: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-top: 0.01rem solid #f1f1f1;
		height: 2.84rem;
	}
	.second_list li h3{
		font-size: 0.43rem;
		color: #000;
	}
	.second_list li h4{
		color: #ea595e;
		font-size: 0.43rem;
	}
	.second_list li .second_info{
		width: 7.1rem;
		display: flex;
		justify-content: space-between;
		
	}
	.second_list li .second_info .second_or{
		width: 0.8rem;
		font-size: 0.4rem;
		color: #a9a9a9;
	}
	.second_list li .second_info div p{
		color: #acacac;
		font-size: 0.33rem;
	}
	.second_list li .second_instro{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 2.12rem;
	}
	.second_list li img{
		height: 1.95rem;
	}
</style>
