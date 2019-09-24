<template lang="pug">
.new-todo-form
  .columns
    .column.is-half
      .box
        h3.is-size-4
          | Add new todo item
        .field
          label.label.is-small
            | Title
          .control
            input.input(v-model="title" type="text" placeholder="Todo Title")

        .field
          label.label.is-small
            | Description
          .control
            textarea.textarea(v-model="description" placeholder="write description here...")

        .field.is-grouped.is-grouped-right
          .control
            button.button.is-primary(@click="addTodoHandler")
              | Add
            button.button.is-text
              | Cancel
</template>

<script>
// eslint-disable-next-line
function uuid (a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid)}

export default {
  name: 'NewTodoComponent',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    addTodoHandler () {
      const { title } = this
      const todo = {
        title,
        description: {
          type: 'text',
          content: this.description
        },
        createdAt: new Date(Date.now()),
        status: 'incomplete',
        id: uuid()
      }
      this.$store.dispatch('addNewTodo', todo)
    }
  }
}
</script>

<style>
.new-todo-form {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
