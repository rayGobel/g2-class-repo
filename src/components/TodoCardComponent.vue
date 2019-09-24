<template lang="pug">
.card
  header.card-header
    p.card-header-title(:class="isCompletedClass")
      | {{ todo.title }}
  .card-content
    .content
      | {{ todo.description.content }}
  footer.card-footer(v-if="!isCompleted && !isDiscarded")
    a(href="#" @click="$store.dispatch('discardTodo', todo)").card-footer-item
      | Discard
    a(href="#" @click="$store.dispatch('setTodoComplete', todo)").card-footer-item
      | Done
</template>

<script>
export default {
  name: 'TodoCardComponent',
  props: ['todo'],
  computed: {
    isCompletedClass () {
      return {
        'has-text-success': this.isCompleted && !this.isDiscarded,
        'is-discarded': this.isDiscarded
      }
    },
    isCompleted () {
      return this.todo.status === 'completed'
    },
    isDiscarded () {
      return this.todo.status === 'discarded'
    }
  }
}
</script>

<style>
.is-discarded {
  text-decoration: line-through;
}
</style>
