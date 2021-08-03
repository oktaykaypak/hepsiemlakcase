import { mount } from '@vue/test-utils'
import cartItem from '@/components/cartItem.vue'

describe('cartItem', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(cartItem)
        expect(wrapper.vm).toBeTruthy()
    })
})