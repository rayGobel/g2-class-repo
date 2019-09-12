<template lang="pug">
  #app.columns
    CurrencyList(v-bind:currencies="currencies").column
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CurrencyList from './components/CurrencyList'
import 'bulma/css/bulma.min.css'

export default {
  name: 'app',
  data () {
    return {
      courseName: 'G2Lab Course - Data',
      currencies: [
        {
          label: 'United States Dollar',
          value: 'USD'
        },
        {
          label: 'Indonesian Rupiah',
          value: 'IDR'
        },
        {
          label: 'British Pound sterling',
          value: 'GBP'
        },
        {
          label: 'Japanese Yen',
          value: 'JPY'
        }
      ]

    }
  },
  props: {
  },
  computed: {
  },
  components: {
    HelloWorld,
    CurrencyList
  }
}
</script>
