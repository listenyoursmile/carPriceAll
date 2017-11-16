<template>
	<div>
		<div class="nav">
		    <div class="nav_left">
				<img src="../assets/images/secondcar-1.png"/>
				<div>
					<h3>帮买二手车</h3>
					<p>专家陪伴购车</p>
				</div>
		    </div>
		    <div class="nav_right"> 
				<img src="../assets/images/secondcar-2.png"/>
				<div>
					<h3>帮您卖车</h3>
					<p>上门估车卖高价</p>
				</div>
		    </div>
		</div>
		<ul class="second_select">
			<li><i>品牌</i><span class="iconfont icon-xialajiantouxiangxia"></span></li>
			<li><i>价格</i><span class="iconfont icon-xialajiantouxiangxia"></span></li>
			<li><i>筛选</i><span class="iconfont icon-xialajiantouxiangxia"></span></li>
			<li><i>排序</i><span class="iconfont icon-xialajiantouxiangxia"></span></li>
		</ul>
		<ul class="second_list">
			<li v-for="data in datalist">
				<img :src='data.imgLogo' />
				<div>
					<h3>{{data.serieName}}</h3>
					<div>
						<div>
							<p><em></em> | <b></b></p>
							<h4>{{data.priceScope}}</h4>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'SecondCar',
		data(){
			return {
				datalist:[]
				//secondprice:
			}
		},
		mounted(){
			this.$http({
				method:"get",
				url:"http://route.showapi.com/1264-2",
				params:{
					showapi_appid:'49264',
					showapi_sign:'e960fd63fa164736972a56fd414882cb',
					brandName:'宝马'
				}
			}).then((data)=>{
				this.datalist = data.data.showapi_res_body.data;
				//this.secondprice = 
				console.log(data.data.showapi_res_body.data)
			})
		}
	}
</script>
<style scoped>
	
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
		justify-content: space-around;
		align-items: center;
		font-size: 0.5rem;
		height: 1.26rem;
	}
	.second_select i{
		margin-right: 0.12rem;
	}
	.second_select span{
		color: #d7d7d7;
	}
</style>
