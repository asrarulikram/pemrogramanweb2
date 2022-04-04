<template>
  <div
    class="boxTask"
    :style="[
      item.done
        ? { background: 'rgb(16, 66, 16)' }
        : { background: 'rgb(50, 35, 33)' },
    ]"
  >
    <p class="title">{{ item.task }}</p>
    <p class="desc">{{ item.desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    done: Boolean,
    task: String,
    desc: String,
    item: Object,
  },
};
</script>

<style>
.boxTask {
  width: 300px;
  padding: 18px;
  color: whitesmoke;
  margin-bottom: 10px;
  border-radius: 10px;
  font-family: Sans-serif;
}
.complete {
  background: rgb(16, 66, 16);
}
.incomplete {
  background: rgb(50, 35, 33);
}
.boxTask > .title {
  font-size: 20px;
  margin: 0px 0px 10px;
}
.boxTask > .desc {
  font-size: 16px;
  margin: 0px;
}
</style>
