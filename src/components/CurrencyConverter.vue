<template lang="pug">
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
              | Results in currency:
          .panel-block
            | USD: 10000
          .panel-block
            | IDR: 10000
</template>
