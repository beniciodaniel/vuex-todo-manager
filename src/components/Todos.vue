<template>
  <div>
    <h3>Todos</h3>

    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>

    <div class="loading" v-if="isLoading">
      <h1>LOADING...</h1>
    </div>

    <div class="todos" v-else>
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        @dblclick="onDoubleClick(todo)"
        class="todo"
        v-bind:class="{ 'is-completed': todo.completed }"
      >
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
    const updateTodo = (updatedTodo) =>
      store.dispatch('updateTodo', updatedTodo);

    const onDoubleClick = (todo) => {
      const updatedTodo = {
        ...todo,
        completed: !todo.completed
      };

      updateTodo(updatedTodo);
    };

    store.dispatch('fetchTodos');

    return {
      allTodos,
      isLoading,
      deleteTodo,
      onDoubleClick
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
  background: #d9d9d9;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  width: 250px;
}

button {
  background: #d21729;
  color: #fff;
  border: 0;
  border-radius: 5px;
  width: 50px;
  height: 20px;
  cursor: pointer;

  align-self: flex-end;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #d9d9d9;
}

.is-completed {
  background: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
