<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { resetFont } from '@/utils'
export default {
  name: 'App',
  data () {
  	return {}
  },
  created () {
  	resetFont();
  }
}
</script>

<style src="@/assets/style/common.less" lang="less"></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
}
</style>
