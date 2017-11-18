<template>
	<div>
		<x-header :left-options="{backText: ''}" class="headerson">
			<a slot="right">分享</a>
			帮买车
		</x-header>
		<div class="helpcar_content">
			<div class="helpcar_banner">
				<img src="../assets/images/helpcar-1.png"/>
			</div>
			<swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="82px" dots-class="custom-bottom" dots-position="center" link='/'></swiper>
			<div class="helpprocess">
				<h2>帮买流程</h2>
				<ul class="helpstep">
					<li>
						<div>
							<img src="../assets/images/helpcar-2.png" />
							<p>提交需求</p>
						</div>
					</li>
					<li><img src="../assets/images/helpcar-6.png"/></li>
					<li>
						<div>
							<img src="../assets/images/helpcar-2.png" />
							<p>带您看车</p>
						</div>
					</li>
					<li><img src="../assets/images/helpcar-6.png"/></li>
					<li>
						<div>
							<img src="../assets/images/helpcar-2.png" />
							<p>专家检测</p>
						</div>
					</li>
					<li><img src="../assets/images/helpcar-6.png"/></li>
					<li>
						<div>
							<img src="../assets/images/helpcar-2.png" />
							<p>付款提车</p>
						</div>
					</li>
				</ul>
			</div>
			<group label-width="4.5em" label-margin-right="2em" label-align="right" style="border-bottom: none;">
				<x-address title="上牌地" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
			      <popup-picker title="购车预算" placeholder="请选择购车预算" :data="list" v-model="value6" value-text-align="left"></popup-picker>
			      <x-input title="联系人" placeholder="请填写您的姓名" v-model="value3"></x-input>
			      <x-input title="手机号" type="password" placeholder="请输入手机号" v-model="value4"></x-input>
			      <x-button type="primary" action-type="button" style = "width: 86%; margin-top: 0.3rem;background: #fe9900;">提交</x-button>
			</group>
		</div>
		<div class="second_footer">
			<h2>咨询电话 : 4000-189-167</h2>
			<p>帮买服务由战略合作伙伴看车二手车提供</p>
		</div>
	</div>
</template>

<script>
	import { XHeader,Swiper,Group,XInput,PopupPicker,XAddress,ChinaAddressData,XButton } from 'vux'
	var imgList = [
	  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
	  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
	  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
	]
	var demoList = imgList.map((one, index) => ({
	  url: 'javascript:',
	  img: one
	}))
	export default {
		name:'Helpbuys',
		data(){
			return {
				demo03_list: demoList,
				list: [['A', 'B', 'C']],
				 addressData: ChinaAddressData,
				 addressValue: ['广东省', '深圳市', '南山区'],
				  value3: '',
				  value4: '',
				  value5: ['A'],
        		  value6: [],
			}
		},
		components:{
			XHeader,Swiper,Group,XInput,PopupPicker,XAddress,XButton
		}
	}
</script>

<style scoped>
	.second_footer{
		text-align: center;
		margin: 0.6rem 0;
	}
	.second_footer h2{
		font-size: 0.4rem;
		color: #eea846;
	}
	.second_footer p{
		font-size: 0.3rem;
		color: #989898;
	}
	.helpprocess{
		background: #fff;
	}
	.helpprocess h2{
		line-height: 1.53rem;
		font-size: 0.5rem;
		font-weight: bold;
		border-bottom: 0.02rem solid #f3f3f3;
		color: #363636;
		margin-left: 0.4rem;
	}
	.helpstep{
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 0.3rem;
		height: 3.2rem;
		border-bottom: 0.3rem solid #f6f6f6;
	}
	.helpstep li{
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 0.44rem;
	}
	.helpstep li:nth-child(2n) img{
		height: 0.47rem;
	}
	.helpstep li:nth-child(2n+1) img{
		height: 1.53rem;
	}
	.vux-header-title{
		color: #3e3e3e !important;
	}
	.helpcar_content .helpcar_banner img{
		width: 100%;
	}
</style>