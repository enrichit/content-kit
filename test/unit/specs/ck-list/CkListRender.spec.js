import Vue from 'vue'
import CkListRender from '@/components/ck-list/CkListRender'

const ckListFactory = (content, update) => {
  content = content || [
    {type: 'ck-longtext', model: 'hello', index: 0}
  ]

  update = update || (() => {
    return 'update'
  })

  const Constructor = Vue.extend(CkListRender)
  return new Constructor({
    propsData: { content, update }
  }).$mount()
}

describe('CkListRender.vue', () => {
  it('renders a list of inputs', () => {
    const vm = ckListFactory([])
    vm.getComponentWithMode('test')
    expect(vm.getComponentWithMode('test'))
      .to.equal('test-render')
  })
})
