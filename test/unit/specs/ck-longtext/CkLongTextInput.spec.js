import Vue from 'vue'
import CkLongtextInput from '@/components/ck-longtext/CkLongtextInput'

const ckFactory = (content, update) => {
  content = content || 'hello'

  update = update || (() => {
    return 'update'
  })

  const Constructor = Vue.extend(CkLongtextInput)
  return new Constructor({
    propsData: { content, update }
  }).$mount()
}

describe('CkLongtextInput.vue', () => {
  it('should render', () => {
    const vm = ckFactory()
    expect(vm.$el)
  })
})
