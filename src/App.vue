<template>
  <div id="app">
    <NaviBar></NaviBar>
    <router-view/>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import NaviBar from './components/NaviBar.vue'
export default {
  name: 'App',
  components: {
    NaviBar,
  }
}
</script>

<style>
</style>
