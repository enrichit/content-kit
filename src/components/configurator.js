export default function (Vue) {
  const config = {}

  return {
    addContentComponent (name, alias, inputComponent, renderComponent, options) {
      Vue.component(`${alias}-input`, inputComponent)
      Vue.component(`${alias}-render`, renderComponent)

      if (config[alias]) {
        throw new Error(`\`${alias}\` is already defined as a content component.`)
      }

      config[alias] = {
        name,
        inputComponent,
        renderComponent,
        options
      }
    },

    getRegisteredComponents () {
      return Object.keys(config)
    },

    getComponent (alias) {
      const component = config[alias]

      if (!component) {
        throw new Error (`\`${alias}\` is not registered with the content-kit configurator.`)
      }

      return {
        name: component.name,
        options: component.options
      }
    }
  }
}
