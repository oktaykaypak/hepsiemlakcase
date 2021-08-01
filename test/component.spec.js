import { mount } from '@vue/test-utils'
import İtemComponent from '@/components/Tutorial.vue'

describe('İtemComponent', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(İtemComponent)
        expect(wrapper.vm).toBeTruthy()
    })
})