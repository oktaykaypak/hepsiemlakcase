import { mount } from '@vue/test-utils'
import item from '@/components/item.vue'

describe('item', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(item)
        expect(wrapper.vm).toBeTruthy()
    })
})