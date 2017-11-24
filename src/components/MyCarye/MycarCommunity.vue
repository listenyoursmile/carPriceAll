<template><div id="">
	<x-header class="MycarCommunity"></x-header>
	<div class="myCommunity">
		<img src="../../../static/images/mycar/2.jpg"/>
		<p>{{myCarname}}<br/><span style="font-size: 0.3rem;">{{myCarautograph}}</span></p>
	</div>
	<div style="display: flex;justify-content:space-around;flex-wrap: nowrap;height: 1.9rem;font-size: 0.45rem;text-align: center;">
			<figure>
			<figcaption>0</figcaption>话题
			</figure>
			<figure>
			<figcaption>0</figcaption>话题
			</figure>
			<figure>
			<figcaption>0</figcaption>话题
			</figure>
			<figure>
			<figcaption>0</figcaption>话题
		</figure>
	</div>
	<group class="grcass">
			<div><cell title="收藏夹" is-link></cell></div>
			<div><cell title="草稿箱" is-link></cell></div>
	</group>
	<group class="grcass">
			<div><cell title="收到的点赞" is-link></cell></div>
			<div><cell title="收到的评论" is-link></cell></div>
			<div><cell title="提到我的" is-link></cell></div>
			<div><cell title="社区通告" is-link></cell></div>
	</group>
</div>
</template>

<script>
	import { XHeader,Group,Cell,XSwitch } from 'vux'
	export default{
		name:'MycarCommunity',
		components:{
			XHeader,
			Group,
			Cell
		},
		data(){
			return {
				myCarautograph:this.$store.state.myCarautograph,
				myCarname:this.$store.state.userID
			}
			
		}
	}
</script>

<style>
	.MycarCommunity{
		    z-index: 110;
		    height: 1.5rem;
		    width: 100%;
		    background: none;
		    position: fixed;
	}
	.myCommunity{
		background: #1498FD;
		height: 5.1rem;
		overflow: hidden;
		text-align: center;
		font-size: 0.6rem;
		color: #fff;
	}
	.myCommunity img{
		position: relative;
		left: 50%;
		margin-top: 0.7rem;
		margin-left: -1.2rem;
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 50%;
	}
	.grcass{
		font-size: 5.5rem;
	}
</style>