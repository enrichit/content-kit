<template>
  <div id="app" class="container">
    <content-kit :mode="'input'" :content="data"></content-kit>
    <content-kit :mode="'render'" :content="data"></content-kit>
  </div>
</template>

<script>
import ContentKit from './components/ContentKit'

export default {
  name: 'app',
  data () {
    return {
      data: {
        type: 'ck-list',
        model: [
          {index: 0, type: 'ck-longtext', model: 'test1'},
          {
            index: 1,
            type: 'ck-list',
            model: [
              {index: 0, type: `ck-longtext`, model: 'test3'},
              {index: 1, type: `ck-longtext`, model: 'test4'},
              {index: 2, type: `ck-longtext`, model: 'test5'}
            ]
          }
        ]
      }
    }
  },
  components: {
    ContentKit
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  display: grid;
  padding: 1em;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}
</style>
