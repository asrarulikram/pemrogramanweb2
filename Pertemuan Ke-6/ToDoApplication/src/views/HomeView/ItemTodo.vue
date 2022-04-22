<template>
  <div
    class="boxTask"
    :style="[done ? { background: '#007e33' } : { background: '#cc0000' }]"
  >
    <p class="title">{{ task }}</p>
    <p class="desc">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    done: Boolean,
    task: String,
    desc: String,
  },
};
</script>

<style>
.boxTask {
  width: 100%;
  padding: 18px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
  color: whitesmoke;
}
.title {
  font-size: 20px;
  margin: 0px 0px 10px;
}
.desc {
  font-size: 16px;
  margin: 0;
}
</style>
