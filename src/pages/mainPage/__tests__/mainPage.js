import React from 'react';
import MainPage from './../mainPage';
import { mount } from 'enzyme';

describe('mainPage tests', () => {
    let props = {};
    const startRegistration = jest.fn()
    let wrapper;
    beforeEach(()=>{
        props = {
            startRegistration
        }
        wrapper = mount(<MainPage {...props} />);
    })
    afterEach(() => {
        wrapper.unmount()
    })
    it('renders without crashing', () => {
        expect(wrapper)
    });
    it('renders withouth calling prop functions', () => {
        expect(startRegistration).not.toBeCalled()
    })
    it('has all elements', () => {
        const title = wrapper.find('Title')
        const text = wrapper.find('p')
        const button = wrapper.find('Button')
        expect(title)
        expect(text)
        expect(button)
    })
    it('redirects on button click', () => {
        const button = wrapper.find('#startButton')
        button.simulate('click')
        expect(startRegistration).toBeCalledTimes(1)
    })
})
