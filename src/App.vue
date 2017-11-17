<template>
  <div id="app">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
	import HelloWorld from "@/components/HelloFromVux"
	
//	var brandList = new Set('a')
	
export default {
  name: 'app',
  components:{
  	HelloWorld
	},
	data(){
		return {
			brandList:[]
		}
	},
	mounted(){
		//按首字母获取品牌列表
		var iList = new Set()
		  this.$http({
				method:'get',
				url:"assets/datas/brandlist.json"
			}).then((data)=>{
					/*let bList = eval(data.data).showapi_res_body.data;
					bList.forEach(function(v,k){
						iList.add(JSON.stringify({'brandName':v.brandName,'imgLogo':v.imgLogo}))
					})
					this.brandList.push(Array.from(iList))
					this.brandList.forEach(function(v){
						console.log(v)
					})*/
				console.log(data)
			})
		}
}

/*
var brandList=[];
function getBrandList(){
	
}*/

</script>

<style lang="less">

@import '~vux/src/styles/reset.less';

html{
	font-size: 33.33px;
}

body {
  background-color: #fbf9fe;
}
*{
	margin: 0;
	padding: 0;
}
</style>
