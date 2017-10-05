<template>
  <div class="ck-list-input">
    <div class="ck-list-content-header">
      <em>{{ listHeader }}</em>
    </div>

    <div class="ck-list-content-item" v-for="contentItem in content" :key="contentItem.index">
      <component
        :is="getComponentWithMode(contentItem.type)"
        :content="contentItem.model"
        :update="updateListItem.bind(this, contentItem.index)"></component>

      <button v-on:click="removeListItem(contentItem.index)">Remove</button>
    </div>
  </div>
</template>

<script>
import CkLongtextInput from '../ck-longtext/CkLongtextInput'

export default {
  // required so it can render itself recursively
  name: 'ck-list-input',
  props: {
    content: { type: Array, required: true },
    update: { type: Function, required: true }
  },
  methods: {
    getComponentWithMode (type) {
      return `${type}-input`
    },
    updateListItem (index, newContent) {
      this.content.map(item => {
        if (item.index === index) {
          item.model = newContent
        }

        return item
      })

      this.update(this.content)
    },
    removeListItem (index) {
      this.content.splice(index, 1)
      this.content.map((item, index) => {
        item.index = index
        return item
      })

      this.update(this.content)
    }
  },
  computed: {
    listHeader () {
      return `List: ${this.content.length} items`
    }
  },
  components: {
    CkLongtextInput
  }
}
</script>

<style lang="scss" scoped>
.ck-list-content-header {
  padding: 0.5em;
  margin-bottom: 1em;
  border-bottom: 1px solid rgba(34, 36, 38, .15);
}

.ck-list-content-item {
  padding: 0 1em;
}

.ck-list-input {
  border: 1px solid rgba(34, 36, 38, .15);
  border-radius: .25em;
}

.ck-list-content-item {
  margin-bottom: 1em;
}
</style>
