<template lang="pug">
.counter-c
  h1
    | Counter Component
  p
    | Start: {{ sNumber }}

  input(v-bind:value="value"
  v-on:input="onInputHandler")
  button(v-if="value")
    | Increment number

  p
    | Number: {{ value | formatLocale }}

  p
    | formatToUS: {{ mixinResult }}
</template>

<script>
const numberFormatter = {
  methods: {
    formatToUS (num) {
      return num.toLocaleString('en-US')
    }
  }
}

const apiNumber = {
  methods: {
    getNumber (num) {
      return num.toLocaleString('en-US')
    },
    updateNumber (num) {
      return num.toLocaleString('en-US')
    }
  }
}

export default {
  mixins: [numberFormatter, apiNumber],
  data () {
    return {
      sNumber: 50
    }
  },
  props: {
    value: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  computed: {
    isButtonDisplayed () {
      return this.value < 100 && this.value % 2 === 0
    },
    mixinResult () {
      return this.formatToUS(this.value)
    }
  },
  methods: {
    onInputHandler (ev) {
      this.$emit('input', Number(ev.target.value))
    },
    displayButton () {
      return this.value < 100 && this.value % 2 === 0
    }
  },
  filters: {
    formatLocale: function (value) {
      return value.toLocaleString('de-DE')
    }
  }
}
</script>
