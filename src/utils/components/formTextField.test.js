import FormTextField from './formTextField';
import React from 'react';
import { mount } from 'enzyme';

describe('text field tests:', () => {
    let wrapper;
    const change = jest.fn();
    let props;
    beforeEach(() => {
        props = {
            title: 'test',
            input: {
                onChange: change
            },
            meta: {
                error: null,
                touched: false,
            },
            required: false
        }
        wrapper = mount(<FormTextField {...props}/>)
    })
    it('renders without crashing', () => {
        props = {
            title: 'test',
            meta: {
                error: null,
                touched: false,
            },
            required: false
        }
        wrapper = mount(<FormTextField {...props}/>)
        expect(wrapper)
    });
    it('doesnt call function without input', () => {
        expect(change).not.toBeCalled()
    });
    it('renders passed text', () => {
        const title = wrapper.find('span')
        expect(title.text()).toBe('test')
    })
    it('calls passed function onChange', () => {
        wrapper.find('input').simulate('change', {
            target: { value: 'test text' }
          })
        expect(change).toBeCalledTimes(1)
    })
})