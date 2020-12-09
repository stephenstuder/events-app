import { shallowMount } from '@vue/test-utils'
import NotificationBar from '@/components/NotificationBar.vue'

describe('NotificationBar.vue', () => {
  it('renders notification when prop is passed', () => {
    const notification = {
      type: 'success',
      message: 'Your event has been created!'
    }
    const wrapper = shallowMount(NotificationBar, {
      propsData: { notification }
    })
    expect(wrapper.text()).toMatch(notification.message)
  })
})
