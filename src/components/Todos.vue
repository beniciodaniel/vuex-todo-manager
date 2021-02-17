<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Todos',
  setup() {
    const store = useStore();

    const allTodos = computed(() => store.getters.allTodos);

    store.dispatch('fetchTodos');

    return {
      allTodos
    };
  }
};
</script>
<style scoped>
.todos {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>
