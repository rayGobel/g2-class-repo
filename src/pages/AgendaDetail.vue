<template lang="pug">
.section.agenda-detail
  .container.agd-header
    h1.is-size-1
      | Agenda Detail

  hr

  .container.agd-content
    .content
      | ID is {{ id }}
</template>

<script>
export default {
  name: 'AgendaDetail',
  props: ['id']
}
</script>
