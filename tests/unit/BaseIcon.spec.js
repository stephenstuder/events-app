import { shallowMount } from '@vue/test-utils'
import baseIcon from '@/components/baseIcon.vue'

describe('BaseIcon.vue', () => {
  test('If no props passed, default value set to 24 for height', async () => {
    const wrapper = shallowMount(baseIcon)
    const height = parseInt(wrapper.find('svg').attributes('height'))
    await wrapper.vm.$nextTick
    expect(height).toBe(24)
  })

  test('If no props passed, default value set to 24 for width', async () => {
    const wrapper = shallowMount(baseIcon)
    const width = parseInt(wrapper.find('svg').attributes('width'))
    await wrapper.vm.$nextTick
    expect(width).toBe(24)
  })

  test('If height prop passed, height is set on the element', async () => {
    const wrapper = shallowMount(baseIcon, {
      propsData: {
        height: 20,
        width: 20
      }
    })
    const height = parseInt(wrapper.find('svg').attributes('height'))
    await wrapper.vm.$nextTick
    expect(height).toBe(20)
  })

  test('If width prop is passed, width is set on the element', async () => {
    const wrapper = shallowMount(baseIcon, {
      propsData: {
        height: 20,
        width: 20
      }
    })
    const width = parseInt(wrapper.find('svg').attributes('width'))
    await wrapper.vm.$nextTick
    expect(width).toBe(20)
  })
})
