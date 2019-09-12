<template lang="pug">
  #app.section
    .columns
      Counter(v-model="stNum").column
      p.column
        | {{ stNum }}
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CurrencyList from './components/CurrencyList'
import Counter from './components/Counter'
import 'bulma/css/bulma.min.css'

export default {
  name: 'app',
  data () {
    return {
      stNum: 100,
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
    CurrencyList,
    Counter
  }
}
</script>
