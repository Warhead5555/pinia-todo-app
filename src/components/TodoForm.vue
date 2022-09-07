<script setup lang="ts">
import { ref } from 'vue';
import { useTodoListStore } from '@/stores/todoList';

const todo = ref('')
const input = ref<HTMLInputElement>()

const store = useTodoListStore()

const addItemAndClear = (item: string) => {
  store.addTodo(item)
  todo.value = ''
  input.value?.focus()
}


</script>

<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
      <input v-model="todo" type="text" ref="input" />
      <button>Add</button>
    </form>
  </div>
</template>