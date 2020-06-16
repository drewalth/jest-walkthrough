import { createWrapper } from '@/testing'
import Emitted from '../emitted.vue'

/**
 * @link https://vue-test-utils.vuejs.org/api/wrapper/#emitted
 */

describe('Emitted.vue', () => {
  it('emits event + payload when button clicked.', async () => {
    const wrapper = createWrapper(Emitted)

    await wrapper.find('button').trigger('click')

    // console.log(wrapper.emitted('myEvent'))

    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
  })
})
