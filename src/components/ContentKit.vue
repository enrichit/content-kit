<template>
  <form class="ui form">
    <component
    :is="rootComponent"
    :content="model"
    :update="updateRootModel"></component>
  </form>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: 'render',
      validator: value => ['input', 'render'].indexOf(value) > -1
    },
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateRootModel (model) {
      this.content.model = model
    }
  },
  computed: {
    rootComponent () {
      return `${this.content.type}-${this.mode}`
    },
    model () {
      return this.content.model
    }
  }
}
</script>
