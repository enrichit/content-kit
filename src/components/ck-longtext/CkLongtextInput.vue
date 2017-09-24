<template>
  <div>
    <textarea :value="content" v-on:input="updateContent"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: String, required: true },
    update: { type: Function, required: true }
  },
  methods: {
    updateContent (event) {
      this.update(event.target.value)
    }
  }
}
</script>
