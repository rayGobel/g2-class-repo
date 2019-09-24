import todos from '@/mocks/todos'

const history = []
const state = { todos, history }

const getters = {
  todoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}

const mutations = {
  addTodo (state, { todo }) {
    state.todos.push(todo)
  },
  setTodoState (state, { todoId, status }) {
    state.todos = state.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.status = status
      }
      return todo
    })
  },
  deleteTodo (state, todoId) {
    state.todos = state.todos.filter((todo) => todo.id !== todoId)
  },
  addNewHistory (state, { log }) {
    const entry = {
      createdAt: new Date(Date.now()),
      log
    }
    state.history.push(entry)
  }
}

const actions = {
  addNewTodo ({ commit }, todo) {
    return new Promise((resolve, reject) => {
      commit('addTodo', { todo })
      commit('addNewHistory', { log: `New todo item added: ${todo.id}` })
      resolve()
    })
  },
  setTodoComplete ({ commit }, todo) {
    return new Promise((resolve, reject) => {
      commit('setTodoState', { todoId: todo.id, status: 'completed' })
      commit('addNewHistory', { log: `Todo is completed: ${todo.id}` })
      resolve()
    })
  },
  discardTodo ({ commit }, todo) {
    return new Promise((resolve, reject) => {
      commit('setTodoState', { todoId: todo.id, status: 'discarded' })
      commit('addNewHistory', { log: `Todo with id ${todo.id} is discarded` })
      resolve()
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
