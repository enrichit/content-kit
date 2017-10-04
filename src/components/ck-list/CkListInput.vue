<template>
  <div class="ck-list-input">
    <div class="content-item" v-for="contentItem in content" :key="contentItem.index">
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
  components: {
    CkLongtextInput
  }
}
</script>
