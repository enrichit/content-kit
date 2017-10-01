import Vue from 'vue'
import CkListInput from '@/components/ck-list/CkListInput'

const ckListFactory = (content, update) => {
  content = content || [
    {type: 'ck-longtext', model: 'hello'}
  ]

  update = update || (() => {
    return 'update'
  })

  const Constructor = Vue.extend(CkListInput)
  return new Constructor({
    propsData: { content, update }
  }).$mount()
}

describe('CkListInput.vue', () => {
  it('renders a list of inputs', () => {
    const vm = ckListFactory()
    expect(vm.$el.getElementsByClassName('ck-longtext-input').length)
      .to.equal(1)
  })

  it('can recursively render itself', () => {
    const vm = ckListFactory([
      {
        type: 'ck-list',
        model: [{
          // we need to go deeper
          type: 'ck-list',
          model: [
            { type: 'ck-longtext', model: '' }
          ]
        }]
      }
    ])

    expect(vm.$el.getElementsByClassName('ck-list-input').length)
      .to.equal(2)

    expect(vm.$el.getElementsByClassName('ck-longtext-input').length)
      .to.equal(1)
  })
})
