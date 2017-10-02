<template>
  <div id="app" class="container">
    <content-kit :mode="'input'" :content="data" class="ui form"></content-kit>
    <content-kit :mode="'render'" :content="data" class="ui form"></content-kit>
  </div>
</template>

<script>
import ContentKit from './components/ContentKit'

export default {
  name: 'app',
  data () {
    return {
      inputMode: 'input',
      // data: {type: 'ck-longtext', model: 'helo'}
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
  },
  methods: {
    switchMode () {
      if (this.inputMode === 'render') {
        this.inputMode = 'input'
      } else {
        this.inputMode = 'render'
      }
    }
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
  grid-template-columns: 1fr 1fr;

  > div {
    padding: 1em;
  }
}

.ck-list-input {
  padding: 1em 0 1em 1em;
}

.ck-longtext-input textarea {
}
</style>
