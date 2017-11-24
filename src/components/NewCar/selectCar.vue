<template>
	<div class="selectCar">
		<x-header title="条件选车" :left-options="{backText: ''}" class="selectCar_header"></x-header>
		<div class="">
			<flow touchstart="selCarStart()" id="aaa">
		    	<flow-line is-done :line-span="2" style="margin-left: -1%;"></flow-line>
		    	<flow-state is-done title="5"></flow-state>
		    	<flow-line is-done :line-span="12"></flow-line>
		    	<flow-state is-done title="10"></flow-state>
		    	<flow-line is-done :line-span="12"></flow-line>
		    	<flow-state is-done title="15"></flow-state>
		    	<flow-line is-done :line-span="12"></flow-line>
		    	<flow-state is-done title="20"></flow-state>
		    	<flow-line is-done :line-span="12"></flow-line>
		
		    	<flow-state title="25" is-done></flow-state>
		    	<flow-line is-done :line-span="12"></flow-line>
		
		    	<flow-state title="40" is-done></flow-state>
		    	<flow-line tip="fff" tip-direction="bottom" :line-span="12" :process-span="60"></flow-line>
		
		    	<flow-state title="60"></flow-state>
		    	<flow-line :line-span="12"></flow-line>
		    	<flow-state title="80"></flow-state>
		    	<flow-line :line-span="12"></flow-line>
		    	<flow-state title="100"></flow-state>
		    	<flow-line :line-span="3"></flow-line>
		    </flow>
		</div>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	import { Flow, FlowState, FlowLine } from 'vux'
	
	export default {
		name:'selectCity',
		components:{
			XHeader,Flow,FlowState,FlowLine
		},
		data(){
			return {
							
			}
		},
		mounted(){
			
		},
		methods:{
			selCarStart(){
				console.log(1)
				console.log(event.target)
			}
		}
	}
</script>

<style>
	.selectCar_header .vux-header-title{
		color: #363636;		
	}
	.vux-header .vux-header-left .left-arrow:before{
		border-color: #363636;
	}
	.selectCar_header{
		background: #fafafa;
		border-bottom: 1px solid #f0f0f0;
	}
	.selectCar .weui-wepay-flow__li{
		z-index: -1;
		height: 16px;
	}
	.selectCar .weui-wepay-flow__li .weui-wepay-flow__state{
		width: 2px;
		height: 10px;
		background-color: #E2E2E2;
	}
</style>
