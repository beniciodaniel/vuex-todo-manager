import axios from 'axios';

const state = {
  loadingStatus: false,
  todos: []
};

const getters = {
  allTodos: (state) => state.todos,
  isLoading: (state) => state.loadingStatus
};

const mutations = {
  FETCH_TODOS(state, todos) {
    state.todos = todos;
  },

  SET_LOADING_STATUS(state, status) {
    state.loadingStatus = status;
  },

  ADD_TODO(state, todo) {
    state.todos.unshift(todo);
  },

  DELETE_TODO(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  }
};

const actions = {
  async fetchTodos({ commit }) {
    commit('SET_LOADING_STATUS', true);

    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      const todos = response.data;
      commit('SET_LOADING_STATUS', false);
      commit('FETCH_TODOS', todos);
    });
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );

    commit('ADD_TODO', response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('DELETE_TODO', id);
  },

  async filterTodos({ commit }, event) {
    const limit = parseInt(
      event.target.options[event.target.options.selectedIndex].value
    );

    commit('SET_LOADING_STATUS', true);

    axios
      .get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      .then((response) => {
        const todos = response.data;
        commit('SET_LOADING_STATUS', false);
        commit('FETCH_TODOS', todos);
      });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
