import { createWrapper } from "@/testing"
import Props from "../props.vue"

const mockProp = 'default'

const options = {
  propsData: {
    state: mockProp
  }
}

describe('Props.vue', () => {

  it('renders component state in template', () => {

    const wrapper = createWrapper(Props, options)

    // console.log('wrapper.html() :>> ', wrapper.html());

    expect(wrapper.find('h1').text()).toBe('Component State: default')

  })

})