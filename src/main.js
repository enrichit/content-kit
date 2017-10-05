// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import configurator from './components/configurator'

import CkListInput from './components/ck-list/CkListInput'
import CkListRender from './components/ck-list/CkListRender'
import CkLongtextInput from './components/ck-longtext/CkLongtextInput'
import CkLongtextRender from './components/ck-longtext/CkLongtextRender'

const ckConfiguration = configurator(Vue)

ckConfiguration.addContentComponent('ck-list', CkListInput, CkListRender)
ckConfiguration.addContentComponent('ck-longtext', CkLongtextInput, CkLongtextRender)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
