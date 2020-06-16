import { createWrapper } from '@/testing'
import UserInput from '../user-input.vue'

/**
 *
 * setValue() - https://vue-test-utils.vuejs.org/api/wrapper/#setvalue
 * trigger() - https://vue-test-utils.vuejs.org/api/wrapper/#trigger
 *
 */

describe('UserInput.vue', () => {
  it('shows success message after successful form submission', async () => {
    const wrapper = createWrapper(UserInput)

    wrapper.find('[data-username]').setValue('foo')

    await wrapper.find('form').trigger('submit')

    expect(wrapper.find('.message').exists()).toBe(true)
    expect(wrapper.find('.message').text()).toBe('Thank you for your submission, foo.')
  })
})
