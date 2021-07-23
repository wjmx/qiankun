<template>
  <div id="app">
      <!--子应用-->
     <!-- <el-menu :router="true" mode="horizontal">
       <el-menu-item index="/">Home-1</el-menu-item>
    <el-menu-item index="/about">About-2</el-menu-item>
    </el-menu> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#qkApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
