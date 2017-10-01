import CkListInput from '@/components/ck-list/CkListInput'
import CkLongtextInput from '@/components/ck-longtext/CkLongtextInput'
import CkListRender from '@/components/ck-list/CkListRender'
import CkLongtextRender from '@/components/ck-longtext/CkLongtextRender'

export const extendVueWithCkComponents = (Vue) => {
  Vue.component('ck-list-input', CkListInput)
  Vue.component('ck-list-render', CkListRender)
  Vue.component('ck-longtext-input', CkLongtextInput)
  Vue.component('ck-longtext-render', CkLongtextRender)
}
