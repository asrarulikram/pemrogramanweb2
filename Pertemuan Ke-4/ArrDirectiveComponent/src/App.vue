<template>
  <Header />
  <div class="left">
    <!-- list -->
    <ul>
      <li v-bind:key="item" v-for="item in list">
        <b>{{ item }}</b>
      </li>
    </ul>

    <!-- list objek -->
    <ul>
      <li v-bind:key="item.id" v-for="item in listObj">
        <b>item</b>
      </li>
    </ul>

    <!-- kondisi -->
    <input type="text" placeholder="Tambah pekerjaan" v-model="newTask" />
    <button @click="addTask">Add</button>
    <ul>
      <li v-bind:key="item.id" v-for="item in listObj">
        <s v-if="item.done">{{ item.task }}</s>
        <b v-else>{{ item.task }}</b>
      </li>
    </ul>
  </div>

  <!-- komponen -->
  <div class="right">
    <input type="text" placeholder="Tambah pekerjaan" v-model="newTask" />
    <input type="text" placeholder="Tambah keterangan" v-model="newDesc" />
    <button @click="addTask">Add</button>
    <ul class="listTask">
      <li v-bind:key="item.id" v-for="item in listObj">
        <list-task :done="item.done" :task="item.task" :desc="item.desc" />
        <!-- <list-task :item="item" /> -->
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ListTask from "./components/ListTask.vue";
export default {
  components: { Header, ListTask },
  data() {
    return {
      newTask: "",
      newDesc: "",
      list: [
        "Belajar VueJS",
        "Membersihkan kamar",
        "Memberbaiki Mesin Air",
        "Menyiram tanaman",
      ],
      listObj: [
        {
          id: 1,
          done: true,
          task: "Belajar VueJS",
          desc: "Jam 8 sampai jam 10",
        },
        {
          id: 2,
          done: false,
          task: "Membersihkan kamar",
          desc: "Jam 1 - Jam 2",
        },
        {
          id: 3,
          done: false,
          task: "Memperbaiki Mesin Air",
          desc: "Jam 5 teng",
        },
        {
          id: 4,
          done: true,
          task: "Menyiram tanaman",
          desc: "Jam 7 sampai jam 8",
        },
      ],
    };
  },
  methods: {
    addTask() {
      this.listObj.push({
        done: false,
        task: this.newTask,
        desc: this.newDesc,
      });
      this.newTask = "";
      this.newDesc = "";
    },
  },
};
</script>

<style>
.left {
  width: 50%;
  position: absolute;
  left: 0;
}
.right {
  width: 50%;
  position: absolute;
  right: 0;
}
.listTask {
  padding: 0;
  list-style-type: none;
}
</style>
