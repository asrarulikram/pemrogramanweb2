<template>
  <div
    class="boxTask"
    :style="[done ? { background: '#007e33' } : { background: '#cc0000' }]"
  >
    <span v-if="done"></span>
    <button v-else @click="store.finishTodo(id)">Centang</button>
    <button @click="store.getTodo(id)">Ubah</button>
    <button @click="store.deleteTodo(id)">Hapus</button>
    <p class="title">{{ task }}</p>
    <p class="desc">{{ desc }}</p>
  </div>
</template>

<script>
import { useToDoStore } from "./../../stores/todo";
export default {
  props: {
    id: Number,
    done: Boolean,
    task: String,
    desc: String,
  },
  setup() {
    const store = useToDoStore();
    return {
      store,
    };
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
