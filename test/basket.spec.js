import { mount } from '@vue/test-utils'
import basket from '@/pages/basket.vue'

describe('basket', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(basket)
        expect(wrapper.vm).toBeTruthy()
    })
})