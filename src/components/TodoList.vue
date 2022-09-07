<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList';
import { storeToRefs } from 'pinia';

const store = useTodoListStore()

const { todoList } = storeToRefs(store)

const { toggleCompleted, deleteTodo } = store

</script>
  
<template>
  <div v-for="todo in todoList" :key="todo.id">
    <div class="content">
      <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
      <span @click="deleteTodo(todo.id)">&#10060;</span>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 4px 10px;
  display: flex;
  gap: 1rem;
}

.completed {
  text-decoration: line-through;
}
</style>