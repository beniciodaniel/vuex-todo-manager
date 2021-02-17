<template>
  <div>
    <h3>Todos</h3>

    <div class="loading" v-if="isLoading">
      <h1>LOADING...</h1>
    </div>

    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        <span>
          {{ todo.title }}
        </span>

        <button @click="deleteTodo(todo.id)">delete</button>
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
    const isLoading = computed(() => store.getters.isLoading);

    const deleteTodo = (id) => store.dispatch('deleteTodo', id);
    store.dispatch('fetchTodos');

    return {
      allTodos,
      isLoading,
      deleteTodo
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

.loading {
  font-size: 5rem;
}

.todo {
  border: 1px solid #ccc;
  background: #43d94d;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
