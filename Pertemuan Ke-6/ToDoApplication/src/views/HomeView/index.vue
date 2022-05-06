<template>
  <div class="wrapTodo">
    <div class="contentLeft">
      <ul>
        <li v-bind:key="item" v-for="item in store.todo">
          <item-todo
            :id="item.id"
            :done="item.done"
            :task="item.task"
            :desc="item.desc"
          />
        </li>
      </ul>
    </div>
    <div class="contentRight">
      <input type="text" placeholder="Masukkan Tugas" v-model="store.newTodo" />
      <input
        type="text"
        placeholder="Masukkan Deskripsi"
        v-model="store.newDesc"
      />
      <button class="submit" @click="store.submitTodo()">
        {{ store.edit ? "Ubah" : "Tambah" }}
      </button>
    </div>
  </div>
</template>

<script>
import ItemTodo from "./ItemTodo.vue";
import { useToDoStore } from "./../../stores/todo";
export default {
  components: { ItemTodo },
  setup() {
    const store = useToDoStore();
    return {
      store,
    };
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
