import todos from '@/mocks/todos'

const state = { todos }

const getters = {
  todoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}

const mutations = {
  addNewTodo (state, { todo }) {
    state.todos.push(todo)
  }
}

export default {
  state,
  getters,
  mutations
}
