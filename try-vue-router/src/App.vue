<template>
  <div id="app">
    <h1>Vue Router</h1>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/home">小家</router-link>
      </li>
      <li>
        <router-link to="/foo">foo</router-link>
      </li>
      <li>
        <router-link to="/bar">bar</router-link>
      </li>
    </ul>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
