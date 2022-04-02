<template>
  <h1 :style="textStyle">{{ message }}</h1>
  <h1 :class="'textClass'">{{ message }}</h1>
  <h1>{{ stringTerbalik(message) }}</h1>
  <input type="text" v-model="message" />
  <button @click="countA++">Nilai A: {{ countA }}</button>
  <button @click="countB++">Nilai B: {{ countB }}</button>
  <h1>Jumlah dari Nilai A dan Nilai B adalah {{ hitungTotal }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
      textStyle: {
        fontSize: "80px",
        color: "green",
        fontStyle: "italic",
      },
      countA: 0,
      countB: 0,
    };
  },
  methods: {
    stringTerbalik(string) {
      return string.split("").reverse().join("");
    },
  },
  computed: {
    hitungTotal() {
      if (this.countA > this.countB) return this.countA - this.countB;
      return this.countB - this.countA;
    },
  },
};
</script>

<style>
.textClass {
  font-size: 100px;
  color: rgb(29, 133, 110);
}
</style>
