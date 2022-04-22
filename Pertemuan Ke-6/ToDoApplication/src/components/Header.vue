<script>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="wrapHeader">
    <h1>Todo Application</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</template>

<style>
.wrapHeader {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
nav a {
  padding: 10px;
  color: #452344;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
.router-link-active {
  text-decoration: underline;
}
</style>
