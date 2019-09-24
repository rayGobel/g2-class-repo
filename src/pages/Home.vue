<template lang="pug">
.section.home-section
  .container.hs-header
    h1.is-size-1
      | Agenda Today

  hr

  .container.hs-content
    .columns
      .column(v-for="todo in todos" :key="todo.id")
        todo-card-component(:todo="todo")
</template>

<script>
import TodoCardComponent from '@/components/TodoCardComponent'

export default {
  name: 'HomePageComponent',
  computed: {
    todos () {
      return this.$store.state.todos
    }
  },
  components: { TodoCardComponent }
}
</script>
