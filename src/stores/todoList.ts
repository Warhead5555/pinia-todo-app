import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface TodoItem {
  id: string;
  text: string;
  done: boolean;
}


export const useTodoListStore = defineStore('todoList', () => {
  const todoList = ref<TodoItem[]>([])

  const addTodo = (item: TodoItem) => {
    todoList.value.push(item)
  }

  const deleteTodo = (itemId: string) => {
    todoList.value = todoList.value.filter((item) => item.id !== itemId)
  }

  const completedTodos = computed(() => {
    return todoList.value.filter((item) => item.done)
  }
})