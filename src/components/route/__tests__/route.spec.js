import { createWrapper } from "@/testing"
import Route from "../route.vue"

const mockRoute = {
  params: {
    id: '123'
  },
  path: 'default'
}

const options = {
  mocks: {
    $route: mockRoute
  }
}

describe('Route.vue', () => {

  it('hides admin wrapper if not on admin view', () => {

    const wrapper = createWrapper(Route, options)

    expect(wrapper.find('h5').text()).toBe('Id - 123')
    expect(wrapper.find('.admin-wrapper').exists()).toBe(false)
    

  })

  it('shows admin wrapper when in on an admin route', () => {

    /**
     * @note we can change the value of our mock to test both 
     * states. This needs to happen before options are passed to 
     * createWrapper()
     * 
     * Also note, options is in the scope of the whole test suite, 
     * so for all following tests, mockRoute.path will equal 'admin-view'
     * 
     * @todo there is probably a better way to do this. research beforeEach().
     * 
     * https://jestjs.io/docs/en/setup-teardown
     * 
     */
    mockRoute.path = 'admin-view'

    const wrapper = createWrapper(Route, options)

    expect(wrapper.find('.admin-wrapper').exists()).toBe(true)

  })

})