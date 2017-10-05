import sinon from 'sinon'
import contentConfig from '@/components/configurator.js'

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

    contentConfig(Vue).addContentComponent('', {}, {}, {})

    expect(spy.calledTwice).to.be.true // eslint-disable-line
  })

  it('will thrown an error if the same component is registered twice', () => {
    const Vue = {component: () => {}}
    const spy = sinon.spy(Vue, 'component')

    const configObject = contentConfig(Vue)

    configObject.addContentComponent('test', {}, {}, {})
    expect(() => configObject.addContentComponent('test', {}, {}, {}))
      .to.throw('test is already defined as a content component.')
  })
})
