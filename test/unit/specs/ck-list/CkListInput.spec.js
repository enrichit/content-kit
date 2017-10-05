import Vue from 'vue'
import CkListInput from '@/components/ck-list/CkListInput'

const ckListFactory = (content, update) => {
  content = content || [
    {type: 'ck-longtext', model: 'hello', index: 0}
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

  it('can update the content passed in via props', () => {
    const vm = ckListFactory()
    vm.updateListItem(0, 'bye bye')

    expect(vm.content[0].model)
      .to.equal('bye bye')
  })

  it('can update the content passed in via props', () => {
    const vm = ckListFactory([
      {type: 'ck-longtext', model: 'hello', index: 0},
      {type: 'ck-longtext', model: 'hello 2', index: 1}
    ])

    vm.removeListItem(0)

    expect(vm.content.length)
      .to.equal(1)

    expect(vm.content[0].index)
      .to.equal(0)
  })

  it ('can add a new content item', {
  })
})
