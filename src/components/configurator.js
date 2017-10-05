const config = {}

export default function (Vue) {
  return {
    addContentComponent (alias, inputComponent, renderComponent, options) {
      Vue.component(`${alias}-input`, inputComponent)
      Vue.component(`${alias}-render`, renderComponent)

      if (config[alias]) {
        throw new Error(`${alias} is already defined as a content component.`)
      }

      config[alias] = {
        inputComponent,
        renderComponent,
        options
      }
    }
  }
}
