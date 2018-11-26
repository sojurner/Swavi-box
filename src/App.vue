<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import axios from 'axios';
import Home from './components/Home/';
export default {
  name: 'app',
  components: {
    Home
  }
};
</script>

<style>
#app,
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  margin: 0;
}

html {
  background-color: #1f242f;
  height: 100vh;
  width: 100vw;
}
</style>
