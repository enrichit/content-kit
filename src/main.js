// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import CkListInput from './components/ck-list/CkListInput'
import CkListRender from './components/ck-list/CkListRender'
import CkLongtextInput from './components/ck-longtext/CkLongtextInput'
import CkLongtextRender from './components/ck-longtext/CkLongtextRender'

Vue.config.productionTip = false

Vue.component('ck-list-input', CkListInput)
Vue.component('ck-list-render', CkListRender)
Vue.component('ck-longtext-input', CkLongtextInput)
Vue.component('ck-longtext-render', CkLongtextRender)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
