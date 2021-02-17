import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    const todos = response.data;

    commit('FETCH_TODOS', todos);
  }
};

const mutations = {
  FETCH_TODOS(state, todos) {
    state.todos = todos;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
