import React from 'react';
import FinalPage from './../finalPage';
import { mount } from 'enzyme';

describe('finalPage tests', () => {
    let props = {};
    let wrapper;
    beforeEach(()=>{
        props = {
            data: {
                test: 'unit'
            }
        }
        wrapper = mount(<FinalPage {...props} />);
    })
    afterEach(() => {
        wrapper.unmount()
    })
    it('renders without crashing', () => {
        expect(wrapper)
    });
    it('has all elements', () => {
        const title = wrapper.find('Title')
        const list = wrapper.find('ul')
        const element = wrapper.find('li')
        expect(title)
        expect(list)
        expect(element)
    })
    it('reders correct data', () => {
        const element = wrapper.find('li')
        expect(element.text()).toBe('test: unit')
    })
})
