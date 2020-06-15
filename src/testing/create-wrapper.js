import { createLocalVue, mount } from '@vue/test-utils'

/**
 * @NOTE DO NOT IMPORT INTO ./index.js. Doing so will break vuex dev tools.
*/

/**
 * factory function for fresh unit tests
 *
 * @param {object} component vue component to test
 * @param {object} options component stubs, props, mocks, etc.
 *
 */
const createWrapper = (component, options = {}) => {
  const localVue = createLocalVue()
  const wrapper = mount(component, ({
    localVue,
    ...options
  }))
  return wrapper
}

export { createWrapper }
