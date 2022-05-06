import { defineStore } from "pinia";

export const useToDoStore = defineStore({
  id: "strtodo",
  state: () => ({
    newTodo: "",
    newDesc: "",
    todo: [
      { id: 1, done: true, task: "Belajar VueJS", desc: "Tugas 1" },
      { id: 2, done: false, task: "Sapu halaman", desc: "Tugas 2" },
      { id: 3, done: false, task: "Bersihkan kamar", desc: "Tugas 3" },
      { id: 4, done: true, task: "Siram tanaman", desc: "Tugas 4" },
    ],
    idEdit: "",
    edit: false,
  }),
  actions: {
    submitTodo() {
      if (this.edit == false) {
        this.todo.push({
          id: this.todo.length + 1,
          done: false,
          task: this.newTodo,
          desc: this.newDesc,
        });
      } else {
        let idx = this.todo.findIndex((obj) => obj.id == this.idEdit);
        this.todo[idx].task = this.newTodo;
        this.todo[idx].desc = this.newDesc;
        this.idEdit = "";
        this.edit = false;
      }
      this.newTodo = "";
      this.newDesc = "";
    },
    finishTodo(id) {
      let idx = this.todo.findIndex((obj) => obj.id == id);
      this.todo[idx].done = true;
    },
    deleteTodo(id) {
      let idx = this.todo.findIndex((obj) => obj.id == id);
      this.todo.splice(idx, 1);
    },
    getTodo(id) {
      let idx = this.todo.findIndex((obj) => obj.id == id);
      this.newTodo = this.todo[idx].task;
      this.newDesc = this.todo[idx].desc;
      this.edit = true;
      this.idEdit = id;
    },
  },
});
