import { createStore } from 'vuex';

import todos from './modules/todos';

export default createStore({
  state: {},

  // functions that effect state
  mutations: {},

  // functions that you call throught your application that call mutations
  actions: {},

  modules: {
    todos
  }
});
