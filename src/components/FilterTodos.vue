<template>
  <div>
    <h3>Filter Todos</h3>
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="25">25</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterTodos',
  methods: mapActions(['filterTodos'])
};
</script>

<style>
select {
  padding: 6px;
  border: 1px solid #41b883;
  border: 0;
  border-radius: 5px;
  width: 100px;
}
</style>
