import Button from './button';
import React from 'react';
import { shallow } from 'enzyme';

describe('button tests:', () => {
    let button;
    const clickFn = jest.fn();
    beforeEach(() => {
        const props = {
            text: 'text',
            onClick: clickFn
        }
        button = shallow(<Button {...props}/>)
    })
    it('renders without crashing', () => {
        expect(button)
    });
    it('doesnt call function without click', () => {
        expect(clickFn).not.toBeCalled()
    });
    it('renders passed text', () => {
        expect(button.text()).toBe('text')
    })
    it('calls passed function onclick', () => {
        button.simulate('click')
        expect(clickFn).toBeCalledTimes(1)
    })
})