<template>
  <div class="main-content">
    <el-menu :router="true" mode="horizontal">
      <!--基座中可以放自己的路由-->
      <el-menu-item index="/home">Home</el-menu-item>
      <el-menu-item index="/main/vue/home">Home-1</el-menu-item>
       <el-menu-item index="/main/vue/about">About-1</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <!--引用其他子应用-->
      <el-menu-item index="/main/vue">vue应用</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="qkApp"></div>
    <div id="react"></div>
  </div>
</template>

<script>
import { start } from "qiankun";

export default {
  name: "Layout",
  mounted() {
    // 在 Main.vue 这个组件的 mounted 周期调用 start 函数，注意不要重复调用。
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>
<style scoped>
</style>