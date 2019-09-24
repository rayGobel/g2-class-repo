<template lang="pug">
.card
  header.card-header
    p.card-header-title(:class="isCompletedClass")
      | {{ todo.title }}
  .card-content
    .content
      | {{ todo.description.content }}
  footer.card-footer(v-if="!isCompleted")
    a(href="#").card-footer-item
      | Discard
    a(href="#").card-footer-item
      | Done
</template>

<script>
export default {
  name: 'TodoCardComponent',
  props: ['todo'],
  computed: {
    isCompletedClass () {
      return {
        'has-text-success': this.isCompleted
      }
    },
    isCompleted () {
      return this.todo.status === 'completed'
    }
  }
}
</script>
