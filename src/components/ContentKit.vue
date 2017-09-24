<template>
  <component
  :is="rootComponent"
  :content="model"
  :update="updateRootModel"></component>
</template>

<script>
import CkListInput from './ck-list/CkListInput'
import CkListRender from './ck-list/CkListRender'
import CkLongtextInput from './ck-longtext/CkLongtextInput'
import CkLongtextRender from './ck-longtext/CkLongtextRender'

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
  },
  components: {
    CkListInput,
    CkListRender,
    CkLongtextInput,
    CkLongtextRender
  }
}
</script>
