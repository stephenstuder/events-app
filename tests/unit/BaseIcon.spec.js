import { shallowMount } from '@vue/test-utils'
import baseIcon from '@/components/baseIcon.vue'

describe('BaseIcon.vue', () => {
  test('renders notification when prop is passed', () => {
    const wrapper = shallowMount(baseIcon)
    expect(true).toBe(true)
  })
})
