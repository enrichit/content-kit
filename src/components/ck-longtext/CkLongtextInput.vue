<template>
  <div class="ck-longtext-input ui cards">
    <div class="card">
      <div class="content">
        test
      </div>

      <div class="content">
        <textarea :value="content" v-on:input="updateContent"></textarea>
      </div>
    </div>
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
