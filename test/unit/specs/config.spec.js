import sinon from 'sinon'
import contentConfig from '@/components/config.js'

describe('config.js', () => {
  it('returns a factory', () => {
    const Vue = {
      component: sinon.spy()
    }

    expect(contentConfig(Vue))
      .to.be.an('object')
  })

  it('can register vue components with `addContentComponent`', () => {
    const Vue = {component: () => {}}
    const spy = sinon.spy(Vue, 'component')

    contentConfig(Vue).addContentComponent('test', {}, {}, {})

    expect(spy.calledTwice).to.be.true // eslint-disable-line
  })
})
