<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld/>
  <!-- <home></home> -->
  <!-- <request></request> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import home from './components/index.vue'
import request from './components/request.vue'
export default {
  name: 'App',
  components: {
    home,
    request,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
