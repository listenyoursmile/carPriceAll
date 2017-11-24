<template>
	<div>
		<x-header style="position: fixed;top: 0;width: 100%;z-index: 200;" :left-options="{backText:''}">
			{{$route.params.serieName}}
			<a slot="right"><span class="iconfont icon-shoucang"></span></a>
		</x-header>
		<div class="detail_content">
			<div class="detail_banner">
				<swiper :aspect-ratio="300/800" :show-dots="false" height="240px">
			      <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
			      	<img :src="item">
			      </swiper-item>
			    </swiper>
			</div>
			<div class="detail_info">
				<h3>报价：{{$route.params.priceScope}}</h3>
				<h4>基本参数</h4>
				<table border="1" cellspacing="0" cellpadding="10" style="margin: 0 auto;padding-left: 10px;">
					<tr><td>车型</td><td>{{carName}}</td></tr>
					<tr><td>级别</td><td>{{carType}}</td></tr>
					<tr><td>车身颜色</td><td>{{colors}}</td></tr>
					<tr><td>内饰颜色</td><td>{{insideColor}}</td></tr>
					<tr><td>变速箱</td><td>{{bsx}}</td></tr>
					<tr><td>系统综合扭矩(N・m)</td><td>{{xtzhnj}}</td></tr>
					<tr><td>车体结构</td><td>{{csjg}}</td></tr>
					<tr><td>前制动器类型</td><td>{{qzdqlx}}</td></tr>
					<tr><td>发动机电子防盗</td><td>{{fdjdzfd}}</td></tr>
					<tr><td>实测离地间隙(mm)</td><td>{{scldjx}}</td></tr>
					<tr><td>日间行车灯</td><td>{{rjxcd}}</td></tr>
					<tr><td>油箱容积(L)</td><td>{{yxrj}}</td></tr>
					<tr><td>220V/230V电源</td><td>{{eeesdy}}</td></tr>
					<tr><td>最大功率转速(rpm)</td><td>{{zdglzs}}</td></tr>
					<tr><td>后视镜电动调节</td><td>{{hsjdddj}}</td></tr>
					<tr><td>宽度(mm)</td><td>{{kd}}</td></tr>
					<tr><td>厂商指导价</td><td>{{cszdj}}￥</td></tr>
					<tr><td>自适应巡航</td><td>{{zsyxh}}</td></tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	import { XHeader,Swiper,SwiperItem } from 'vux'
	const imgList = [
	  'http://img0.imgtn.bdimg.com/it/u=3527672846,3847374902&fm=11&gp=0.jpg',
	  'http://img2.imgtn.bdimg.com/it/u=387226714,1239924316&fm=11&gp=0.jpg',
	  'http://img3.imgtn.bdimg.com/it/u=3211351599,1359591616&fm=27&gp=0.jpg',
	  'http://img1.imgtn.bdimg.com/it/u=4046781586,3243043033&fm=27&gp=0.jpg'
	]
	export default {
		name:'Detail',
		components:{
			XHeader,Swiper,SwiperItem
		},
		data(){
			return{
				demo04_list: imgList,
				carName:'',
				carType:'',
				colors:'',
				insideColor:'',
				bsx:'',
				xtzhnj:'',
				csjg:'',
				qzdqlx:'',
				fdjdzfd:'',
				scldjx:'',
				rjxcd:'',
				yxrj:'',
				eeesdy:'',
				zdglzs:'',
				hsjdddj:'',
				kd:'',
				cszdj:'',
				zsyxh:''
			}
		},
		mounted(){
			console.log(this.demo04_list)
			//this.$emit('to-parent',true);
			this.$http({
				method:"get",
				url:"http://route.showapi.com/1264-1",
				params:{
					showapi_appid:'49264',
					showapi_sign:'e960fd63fa164736972a56fd414882cb',
					brandName:this.$route.params.brandName,
					serieName:this.$route.params.serieName
				}
			}).then((data)=>{
				var thisdata = data.data.showapi_res_body.data[0];
				console.log(data.data.showapi_res_body.data[0]);
				this.carName = thisdata.carName;
				this.carType = thisdata.carType;
				this.colors = thisdata.color[0].name;
				this.insideColor = thisdata.insideColor[0].name;
				this.bsx = thisdata.bsx;
				this.xtzhnj = thisdata.zgcs;
				this.csjg = thisdata.csjg;
				this.qzdqlx = thisdata.gfyjs;
				this.fdjdzfd = thisdata.ckg;
				this.scldjx = thisdata.scyjs;
				this.rjxcd = thisdata.styleNum;
				this.yxrj = thisdata.scyhy;
				this.eeesdy = thisdata.gxbzhyhy;
				this.zdglzs = thisdata.cszdj;
				this.hsjdddj = thisdata.dpzx.hxjlx;
				this.kd = thisdata.clzd.hltgg;
				this.cszdj = thisdata.cszdj;
				this.zsyxh = thisdata.clzd.btgg;
				if(data.data.showapi_res_body.data[0] == undefined){
					alert('亲，您找的该商品还未收录哦');
					window.history.go(-1);
					
				}
			})
		}
	}
</script>

<style scoped>
	.icon-shoucang{
		color: #666 !important;
	}
	.vux-header{
		background-color: #fff;
	}
	table td{
		padding-left: 0.5rem;
		width:30%;
	}
	.detail_content{
		padding-top: 1.4rem;
		height: 100%;
		overflow: auto;
	}
	.icon-shoucang{
		font-size: 0.6rem;
		font-weight: bold;
		color: #fff;
	}
	.swiper-demo-img img {
	  width: 100%;
	}
	.detail_info{
		padding: 0 0.4rem;
		line-height: 1rem;
		font-size: 0.4rem;
	}
	.detail_info h3{
		color: #ff4f53;
	}
	.detail_info h4{
		color: #666;
	}
</style>