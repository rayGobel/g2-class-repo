<template lang="pug">
.section.home-section
  .container.hs-header
    h1.is-size-1
      | History Log

  hr

  .container
    ul
      li(v-for="log in logs")
        | @{{ log.createdAt }} : {{ log.log }}

</template>

<script>
export default {
  name: 'HistoryLogComponent',
  computed: {
    logs () {
      return this.$store.state.history
    }
  }
}
</script>
