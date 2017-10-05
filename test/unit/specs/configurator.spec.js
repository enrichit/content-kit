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

    contentConfig(Vue).addContentComponent('', '', {}, {}, {})

    expect(spy.calledTwice).to.be.true // eslint-disable-line
  })

  it('will thrown an error if the same component is registered twice', () => {
    const Vue = {component: () => {}}
    const spy = sinon.spy(Vue, 'component')

    const configObject = contentConfig(Vue)

    configObject.addContentComponent('', 'test', {}, {}, {})
    expect(() => configObject.addContentComponent('', 'test', {}, {}, {}))
      .to.throw('`test` is already defined as a content component.')
  })

  it('can get details of all registered components', () => {
    const Vue = {component: () => {}}
    const configObject = contentConfig(Vue)

    configObject.addContentComponent('', 'test1', {}, {}, {})
    configObject.addContentComponent('', 'test2', {}, {}, {})

    expect(configObject.getRegisteredComponents())
      .to.include.members(['test1', 'test2'])
  })

  it('can get options and name of a single component', () => {
    const Vue = {component: () => {}}
    const configObject = contentConfig(Vue)

    configObject.addContentComponent('', 'test1', {}, {}, {
      test1: 'hello'
    })

    const testObj = configObject.getComponent('test1')

    expect(testObj)
      .to.have.keys('name', 'options')
  })

  it('throws an error when looking for a non-registered component', () => {
    const Vue = {component: () => {}}
    const configObject = contentConfig(Vue)

    expect(() => configObject.getComponent('test1'))
      .to.throw('`test1` is not registered with the content-kit configurator.')
  })
})
