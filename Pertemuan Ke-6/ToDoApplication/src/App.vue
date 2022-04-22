<template>
  <div class="wrapContent" ref="root">
    <Header />
    <RouterView />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";
export default {
  components: { Header },
};
</script>
<style>
body {
  background: #98c87c;
  margin: 0;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.wrapContent {
  min-height: calc(100vh - 24px);
  width: 800px;
  margin: 0 auto;
  background: white;
  padding: 0px 24px 24px;
}
</style>
