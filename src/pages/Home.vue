<template lang="pug">
.section.home-section
  .container.hs-header
    h1.is-size-1
      | Agenda Today

  hr

  .container.hs-content
    .columns
      .column
        .card
          header.card-header
            p.card-header-title
              | Learn Vue Router
          .card-content
            .content
              | Descriptive text on how to learn vue-router
          footer.card-footer
            a(href="#").card-footer-item
              | Discard
            a(href="#").card-footer-item
              | Done

      .column
        .card
          header.card-header
            p.card-header-title
              | Learn Vuex
          .card-content
            .content
              | Descriptive text on how to learn vuex
          footer.card-footer
            a(href="#").card-footer-item
              | Discard
            a(href="#").card-footer-item
              | Done

      .column
        .card
          header.card-header
            p.card-header-title
              | Learn how to use both
          .card-content
            .content
              | Descriptive text on how to learn vue-router and vuex
          footer.card-footer
            a(href="#").card-footer-item
              | Discard
            a(href="#").card-footer-item
              | Done
</template>
