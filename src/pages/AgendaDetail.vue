<template lang="pug">
.section.agenda-detail
  .container.agd-content
    .level
      .level-left
        h2.is-size-2
          | {{ todo.title }}
      .level-right
        h4.is-size-6.is-family-monospace
          | ID : {{ id }}

    hr

    .content
      | {{ todo.description.content }}
</template>

<script>
export default {
  name: 'AgendaDetail',
  props: ['id'],
  computed: {
    todo () {
      return this.$store.getters.todoById(this.id)
    }
  }
}
</script>
