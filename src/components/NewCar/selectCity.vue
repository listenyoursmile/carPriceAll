<template>
	<div>
		<x-header title="选择城市" :left-options="{backText: ''}" class="selectCity_header"></x-header>
		<div id="">
			<p>当前定位城市</p>
			<p>上海</p>
			<!--{{cityList}}-->
			<ul class="Ulmy" @touchstart="Scroll()">
				<li v-for="(item,index) in cityList" @click="onbutclick(index)" >{{item.provinceName}}</li>
			</ul>
			<ul v-bind:class="{Ulchild2:ulclicktrue}" class="Ulchild" @touchstart="childScroll()">
				<li v-for="child in childlist" @click="address(child)">{{child}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default {
		name:'selectCity',
		components:{
			XHeader
		},
		data(){
			return {
				cityList:[],
				ulclicktrue:true,
				childlist:[]
			}
		},
		mounted(){
			function compare(obj1, obj2) {
			    var val1 = obj1.provinceName;
			    var val2 = obj2.provinceName;
			    return val1.localeCompare(val2,'zh')
			}
			this.$http({
				method:'get',
				dataType:'json',
				url:"/static/cityList.json"
			}).then(data=>{
				this.cityList = data.data.sort(compare)
			})
		},
		methods:{
			onbutclick:function(index){
			this.ulclicktrue = false
			let	tata = this.cityList[index].citys
			var arr = [];
				tata.forEach((v,k)=>{
					console.log(tata[k])
					arr.push(tata[k].citysName)
					
				})
				this.childlist = arr
				console.log(this.childlist)
			},
			childScroll:function(){
			},
			Scroll:function(){
				console.log(1)
				this.ulclicktrue = true
				return false
			},
			address:function(v){
				console.log(v)
				this.$store.state.address=v
				window.history.back()
			}
		}
	}
</script>

<style>
	.selectCity_header .vux-header-title{
		color: #333;		
	}
	.selectCity_header .vux-header-left a{
		color: #333;	
	}
	.selectCity_header{
		width: 100%;
		height: 1.6rem;
		background: #fafafa;
		position: fixed;
		z-index: 2;
		top: 0;
	}
	.Ulmy{
		width: 100%;
		height: 100%;
		background: #fff;
		margin-top: 0.6rem;
	}
	.Ulmy li{
		height: 1.26rem;
		line-height: 1.26rem;
		border-bottom: solid 1px #C1C1C1;
		padding-left: 4%;
		font-size: 0.45rem;
	}
	.Ulchild2{
		display: none;
	}
	.Ulchild{
		position: fixed;
		top: 1.6rem;
		right: 0;
		background: #fff;
		width: 74.5%;
		height: 100%;
		overflow: auto;
		border-left: solid 1px #ccc;
	}
	.Ulchild li{
		height: 1.26rem;
		line-height: 1.26rem;
		border-bottom: solid 1px #C1C1C1;
		padding-left: 4%;
		font-size: 0.45rem;
	}
</style>
