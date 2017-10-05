import CkListInput from '@/components/ck-list/CkListInput'
import CkLongtextInput from '@/components/ck-longtext/CkLongtextInput'
import CkListRender from '@/components/ck-list/CkListRender'
import CkLongtextRender from '@/components/ck-longtext/CkLongtextRender'

import configurator from '@/components/configurator'

export const extendVueWithCkComponents = (Vue) => {
  const config = configurator(Vue)

  config.addContentComponent ('Longtext', 'ck-longtext', CkListInput, CkListRender)
  config.addContentComponent ('List', 'ck-list', CkListInput, CkListRender, {
    childComponents: 'ck-longtext'
  })
}
