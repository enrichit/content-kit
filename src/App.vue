<template>
  <div id="app">
    <img src="./assets/logo.png">
    <content-kit :mode="inputMode" :content="data"></content-kit>
    <button v-on:click="switchMode()">Switch Mode</button>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
