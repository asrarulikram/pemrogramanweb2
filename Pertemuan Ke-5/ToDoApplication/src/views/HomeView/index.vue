<template>
  <div class="wrapTodo">
    <div class="contentLeft">
      <ul>
        <li v-bind:key="item" v-for="item in todo">
          <item-todo :done="item.done" :task="item.task" :desc="item.desc" />
        </li>
      </ul>
    </div>
    <div class="contentRight">
      <input type="text" placeholder="Masukkan Tugas" v-model="newTodo" />
      <input type="text" placeholder="Masukkan Deskripsi" v-model="newDesc" />
      <button class="submit" @click="addTodo">Add</button>
    </div>
  </div>
</template>

<script>
import ItemTodo from "./ItemTodo.vue";
export default {
  components: { ItemTodo },
  data() {
    return {
      newTodo: "",
      newDesc: "",
      todo: [
        { id: 1, done: true, task: "Belajar VueJS", desc: "Tugas 1" },
        { id: 2, done: false, task: "Sapu halaman", desc: "Tugas 2" },
        { id: 3, done: false, task: "Bersihkan kamar", desc: "Tugas 3" },
        { id: 4, done: true, task: "Siram tanaman", desc: "Tugas 4" },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todo.push({
        id: this.todo.length + 1,
        done: false,
        task: this.newTodo,
        desc: this.newDesc,
      });
      this.newTodo = "";
      this.newDesc = "";
    },
  },
};
</script>

<style>
.wrapTodo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.contentLeft {
  width: 50%;
  padding: 20px;
}
.contentRight {
  width: 50%;
  padding: 20px;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
input[type="text"] {
  width: 100%;
  padding: 12px 8px;
  box-sizing: border-box;
  background: rgb(218, 241, 184);
  border: 1px solid rgb(142, 170, 99);
  border-radius: 5px;
  margin-bottom: 20px;
}
input[type="text"]:focus {
  outline-color: rgb(72, 92, 42);
}
.submit {
  background: rgb(89, 113, 53);
  border-radius: 5px;
  width: 100%;
  border: 1px solid rgb(72, 92, 42);
  color: #efefef;
  padding: 12px 8px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
