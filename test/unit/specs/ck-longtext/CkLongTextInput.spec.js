import Vue from 'vue'
import sinon from 'sinon'
import CkLongtextInput from '@/components/ck-longtext/CkLongtextInput'

const ckFactory = (content = 'hello', update = sinon.spy()) => {
  const Constructor = Vue.extend(CkLongtextInput)
  return new Constructor({
    propsData: { content, update }
  }).$mount()
}

describe('CkLongtextInput.vue', () => {
  it('should render', () => {
    const vm = ckFactory()
    expect(vm.$el.classList.contains('ck-longtext-input')).to.be.true // eslint-disable-line
    expect(vm.$el.getElementsByTagName('textarea')[0].value).to.have.string('hello')
  })

  it('should call parent update', () => {
    const update = sinon.spy()
    const vm = ckFactory('hello', update)
    vm.updateContent({
      target: {
        value: 'hello'
      }
    })

    expect(update.calledOnce).to.be.true //eslint-disable-line
  })
})
