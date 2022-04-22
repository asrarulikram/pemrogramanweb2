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
  }),
  actions: {
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
});
