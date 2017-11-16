<template>
  <div id="app">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
	import HelloWorld from "@/components/HelloFromVux"
export default {
  name: 'app',
  components:{
  	HelloWorld
	}
}
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
