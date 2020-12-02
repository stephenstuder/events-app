import { shallowMount } from '@vue/test-utils'
import notificationBar from '@/components/notificationBar.vue'

describe('notificationBar.vue', () => {
  it('renders notification when prop is passed', () => {
    const notification = {
      type: 'success',
      message: 'Your event has been created!'
    }
    const wrapper = shallowMount(notificationBar, {
      propsData: { notification }
    })
    expect(wrapper.text()).toMatch(notification.message)
  })
})
