<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import actions from "./micro/actions";
export default {
  name: "App",
  components: { Layout },
  created() {
    actions.setGlobalState({ token: '111' });
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
