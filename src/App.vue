<template>
  <div class="app">
    <h1>Hello!</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return { message: 'Hi' };
  },
}
</script>

<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
