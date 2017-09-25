import Vue from 'vue'
import ContentKit from '@/components/ContentKit'

const ckFactory = (mode, content) => {
  mode = mode || 'render'

  content = content || {
    type: 'ck-longtext',
    model: 'hello'
  }

  const Constructor = Vue.extend(ContentKit)
  return new Constructor({
    propsData: { mode, content }
  }).$mount()
}

describe('ContentKit.vue', () => {
  it('should render a dynamic component', () => {
    const vm = ckFactory()
    expect(vm.$el.textContent.trim())
      .to.equal('hello')
  })

  it('should switch modes based on props', () => {
    expect(ckFactory().rootComponent)
      .to.equal('ck-longtext-render')

    expect(ckFactory('input').rootComponent)
      .to.equal('ck-longtext-input')
  })
})
