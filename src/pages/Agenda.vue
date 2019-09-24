<template lang="pug">
.section.todo-list-section
  .container.tl-header
    h1.is-size-1
      | Todo list

  hr

  .container.tl-content
    table.table.is-fullwidth
      thead
        tr
          th
            | Name
          th
            | Date
          th
            | Status
          th
            | Action
      tbody
        tr(v-for="todo in todos" :key="todo.id")
          td
            | {{ todo.title }}
          td
            | {{ todo.createdAt }}
          td
            | {{ todo.status }}
          td
            .field.is-grouped
              p.control
                router-link(:to="{ path: `/agenda/${todo.id}` }").button
                  span.icon.is-small
                    i.fas.fa-eye
                  span
                    | View
              p.control
                a.button.is-danger
                  span.icon.is-small
                    i.fas.fa-trash
                  span
                    | Delete
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AgendaComponent',
  computed: {
    ...mapState([
      'todos'
    ])
  }
}
</script>
