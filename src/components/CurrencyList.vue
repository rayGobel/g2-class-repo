<template lang="pug">
.currency-list.card
    .card-content
        h1.title
            | Currency I Have

        .column(v-if="currencies.length")
            select(v-model="selectedCurrency")
                option(v-for="currency in currencies" :value="currency.value")
                    | {{ currency.label }} - {{ currency.value }}

            input(v-model="inputAmount")

            p
                | Input: {{ inputAmount }}, Selected Currency: {{ selectedCurrency }}

        p(v-else).column
            | Tidak ada mata uang di list ini
        .column
          p
            | Rates: {{ currencyRates }}
</template>

<script>
import axios from 'axios'

const CurrencyService = {
  getTodayRates () {
    const url = 'https://api.exchangeratesapi.io/latest'
    return axios.get(url)
  }
}

export default {
  data () {
    return {
      selectedCurrency: 'IDR',
      inputAmount: 0,
      currencyRates: {}
    }
  },
  created: function () {
    CurrencyService.getTodayRates()
      .then(response => {
        this.currencyRates = response.data
      })
  },
  props: {
    currencies: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
