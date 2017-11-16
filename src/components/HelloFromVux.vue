<template>
	<div>
		<!--<x-header :left-options="{showBack: isTrue}">do not show Back</x-header>-->
		<router-view @to-parent="getchild"></router-view>
	</div>
</template>

<script>
//import { XHeader } from 'vux'


export default {
  components: {
  	//  XHeader
  },
  data () {
    return {
//    isTrue:false
    }
  },
  methods:{
  	getchild(value){
//		this.isTrue = value;
  	}
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
