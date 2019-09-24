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
        tr
          td
            | Learn Vue Router
          td
            | {{ Date.now() }}
          td
            | Not Yet
          td
            .field.is-grouped
              p.control
                a.button
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
        tr
          td
            | Learn Vuex
          td
            | {{ Date.now() }}
          td
            | Not Yet
          td
            .field.is-grouped
              p.control
                a.button
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
        tr
          td
            | Learn Both
          td
            | {{ Date.now() }}
          td
            | Not Yet
          td
            .field.is-grouped
              p.control
                a.button
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
