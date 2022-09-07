import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export const useTodoListStore = defineStore('todoList', () => {
  const todoList = ref<TodoItem[]>([])
  const id = ref(1)

  const addTodo = (text: string) => {
    todoList.value.push({
      id: (id.value++).toString(),
      text,
      completed: false
    })
  }

  const deleteTodo = (itemId: string) => {
    todoList.value = todoList.value.filter((item) => item.id !== itemId)
  }

  const completedTodos = computed(() => {
    return todoList.value.filter((item) => item.completed)
  })

  const toggleCompleted = (idToFind: string) => {
    const item = todoList.value.find((item) => item.id === idToFind)
    if (item) {
      item.completed = !item.completed
    }
  }

  return {
    todoList,
    completedTodos,
    toggleCompleted,
    addTodo,
    deleteTodo,
  }
})