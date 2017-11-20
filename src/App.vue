<template>
  <div id="app">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
	import HelloWorld from "@/components/HelloFromVux"
//	import getBrandList from "@/components/getBrandList"
	
export default {
  name: 'app',
  components:{
  	HelloWorld
	},
	data(){
		return {
			brandList:[]
		}
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
#app{
	height: 100%;
}

body {
  background-color: #fbf9fe;
}
*{
	margin: 0;
	padding: 0;
}
</style>
