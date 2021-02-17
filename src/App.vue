<template>
  <div class="container">
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.6;
  background: #a691f2;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
