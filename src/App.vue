<template lang="pug">
  section#app.section
    nav.level
      ul.level-right
        li.level-item
          router-link(to="/").button.is-outlined
            | Home
        li.level-item
          router-link(to="/agenda").button.is-outlined
            | Agenda
        li.level-item
          router-link(to="/history").button.is-outlined
            | History
    .container.main-content
      // change components to 'router-view'
      router-view
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: 'G2ClassApp'
}
</script>

<style lang="scss">
@import 'bulma/bulma.sass';
</style>
