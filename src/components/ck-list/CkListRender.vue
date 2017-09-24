<template>
  <div>
    <div class="content-item" v-for="contentItem in content" :key="contentItem.index">
      <component
        :is="getComponentWithMode(contentItem.type)"
        :content="contentItem.model"></component>
    </div>
  </div>
</template>

<script>
import CkLongtextRender from '../ck-longtext/CkLongtextRender'

export default {
  props: {
    content: { type: Array, required: true }
  },
  methods: {
    getComponentWithMode (type) {
      return `${type}-render`
    }
  },
  components: {
    CkLongtextRender
  }
}
</script>
