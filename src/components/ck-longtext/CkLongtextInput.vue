<template>
  <div class="ck-longtext-input">
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

<style lang="scss" scoped>
.ck-longtext-input textarea {
  width: 100%;
  margin: 0;
  outline: 0;
  line-height: 1.2;
  padding: .5em 1em;
  font-size: 1em;
  border: 1px solid rgba(34, 36, 38, .15);
  color: rgba(0, 0, 0, .85);
  border-radius: .25em;
  box-shadow: 0 0 0 0 transparent inset;
  transition: color .1s ease, border-color .1s ease;
}
</style>
