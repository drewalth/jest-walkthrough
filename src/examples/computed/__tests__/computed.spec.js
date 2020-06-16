import { createWrapper } from '@/testing'
import Computed from '../computed.vue'

describe('Computed.vue', () => {
  it('renders initials in template', () => {
    const wrapper = createWrapper(Computed, {
      propsData: {
        fullName: 'John Doe'
      }
    })

    expect(wrapper.find('p').text()).toBe('Initials: JD')
  })
})
