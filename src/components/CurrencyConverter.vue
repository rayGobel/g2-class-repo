<template lang='pug'>
section.currency-calculator.section
  .container
    .columns
      .column.cc-from-currency

        .field
          label.label
            | Currency From
          .control
            .select
              select
                option
                  | USD - United States Dollar
                option
                  | IDR - Indonesian Rupiah

        .field
          label.label
            | Amount
          .control
            input.input

      .column.cc-to-currency

        .panel
          .panel-heading
            h1.is-size-3
              | Result in currencies:
          .panel-block
            | USD: 10000
          .panel-block
            | IDR: 10000
</template>

<script>
const currencyDict = [
  {
    name: 'Indonesian Rupiah',
    symbol: 'IDR'
  },
  {
    name: 'United States Dollar',
    symbol: 'USD'
  },
  {
    name: 'Japanese Yen',
    symbol: 'JPY'
  },
  {
    name: 'Pound sterling',
    symbol: 'GBP'
  },
  {
    name: 'Euro',
    symbol: 'EUR'
  }
]

const mockApiResponse = {
  'base': 'EUR',
  'date': '2019-09-11',
  'rates': {
    'CHF': 1.0934,
    'ZAR': 16.1384,
    'PHP': 57.354,
    'BGN': 1.9558,
    'NOK': 9.8745,
    'INR': 78.872,
    'CAD': 1.4468,
    'CZK': 25.867,
    'HKD': 8.6261,
    'JPY': 118.51,
    'DKK': 7.4607,
    'SGD': 1.518,
    'HUF': 332.4,
    'NZD': 1.7147,
    'THB': 33.653,
    'IDR': 15470.22,
    'GBP': 0.89133,
    'HRK': 7.3945,
    'PLN': 4.3335,
    'USD': 1.1003,
    'KRW': 1312.34,
    'ISK': 138.7,
    'CNY': 7.8309,
    'AUD': 1.6021,
    'RUB': 71.8661,
    'SEK': 10.6563,
    'MXN': 21.4565,
    'TRY': 6.3335,
    'ILS': 3.899,
    'RON': 4.7348,
    'MYR': 4.5987,
    'BRL': 4.4721
  }
}
</script>
