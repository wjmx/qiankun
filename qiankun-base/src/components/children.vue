<template>
  <div class="main-content">
    <div id="qkApp"></div>
    <div id="react"></div>
  </div>
</template>
<script>
import { start } from "qiankun";
export default {
  name: "Children",
  mounted() {
    // 在 Main.vue 这个组件的 mounted 周期调用 start 函数，注意不要重复调用。
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>