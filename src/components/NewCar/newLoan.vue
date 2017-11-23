<template>
	<div class="new_newLoan">
		<x-header title="条件选车" :left-options="{backText: ''}" class="selectCar_header"></x-header>
		<h2>个人信息</h2>
		<p>亲，完善个人信息，好为您匹配最合适的金融产品</p>
		
		<div class="new_loan_box">
			<h4>职业身份</h4>
			<ul>
		    	<li><div>公务员/事业单位</div></li>
		    	<li><div>上班族</div></li>
		    	<li><div>企业户</div></li>
		    	<li><div>个体户</div></li>
		    	<li><div>自由职业者</div></li>
		    </ul>
		</div>
		<div class="new_loan_box">
			<h4>工资收入</h4>
			<ul>
		    	<li><div>3000元以下</div></li>
		    	<li><div>3000-5000元</div></li>
		    	<li><div>5000-8000元</div></li>
		    	<li><div>8000-12000元</div></li>
		    	<li><div>12000-20000元</div></li>
		    	<li><div>20000元以上</div></li>
		    </ul>
		</div>
		<div class="new_loan_box">
			<h4>社保</h4>
			<ul>
		    	<li><div>有社保</div></li>
		    	<li><div>无社保</div></li>
		    </ul>
		</div>
		
		<div class="new_loan_box">
			<h4>公积金</h4>
			<ul>
		    	<li><div>有公积金</div></li>
		    	<li><div>无公积金</div></li>
		    </ul>
		</div>
		<div class="new_loan_box">
			<h4>住房状态</h4>
			<ul>
		    	<li><div>自有全款</div></li>
		    	<li><div>自有贷款</div></li>
		    	<li><div>租赁</div></li>
		    </ul>
		</div>
		<div class="new_loan_box">
			<h4>信用</h4>
			<ul>
		    	<li><div>信用良好</div></li>
		    	<li><div>少数逾期</div></li>
		    	<li><div>多次逾期</div></li>
		    	<li><div>无信用记录</div></li>
		    </ul>
		</div>
		<input type="button" name="selectLoan" value="完成，选择贷款车款" />
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
							
			}
		},
		mounted(){
			$(".new_loan_box ul li").click(function(){
				$(".new_loan_box ul li").removeClass("new_loan_sel")
				$(this).addClass("new_loan_sel");
			})
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
	.new_newLoan{
		background: #fff;
		
	}
	.new_newLoan h2{
		color: #333333;
		font-size: 0.75rem;
		line-height: 0.75rem;
		padding-top: 0.77rem;
		font-weight: bold;
		padding-left:3%;
	}
	.new_newLoan>p{
		color: #999999;
		font-size: 0.38rem;
		line-height: 1.18rem;
		padding-bottom: 0.15rem;
		padding-left:3%;
	}
	.new_loan_box{
		overflow: hidden;
		background: #fff;
		padding-left:3%;
	}
	.new_loan_box h4{
		line-height: 1.45rem;
		font-size: 0.4rem;
		color: #000;
		font-weight: bold;
		margin-top: 0.17rem;
	}
	.new_loan_box ul li{
		font-size: 0.34rem;
		float: left;
		width: 30%;
		text-align: center;
		color: #666666;
		background-color: #fff;
		border-radius: 4px;
		border: 1px solid #dfdfdf;
		background-clip: padding-box;
		line-height: 1.03rem;
		margin-right: 2%;
		margin-bottom: 0.2rem;
	}
	.new_loan_box ul .new_loan_sel{
		background: #edf5ff;
		border:1px solid  #1d88eb;
		color: #1e88eb;
	}
	.new_newLoan>input{
		width: 90%;
		margin: 1rem 5% 1rem;
		height: 1rem;
		line-height: 1rem;
		background: #1d88eb;
		color: #fff;
		border: none;
		border-radius: 3px;
	}
</style>