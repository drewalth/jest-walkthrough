import { createWrapper } from "@/testing"
import VuexStore from "../vuex-store.vue"

const mockStore = {
  state: {
    error: false,
    loading: false,
    data: null
  },
}

const options = {
  mocks: {
    $store: mockStore
  }
}

describe('VuexStore.vue', () => {

  it('shows loading indicator when loading', () => {

    const wrapper = createWrapper(VuexStore, options)

    expect(wrapper.find('.vuex-store').exists()).toBe(true)

  })

})