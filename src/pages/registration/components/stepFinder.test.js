import StepFinder from './stepFinder';
import React from 'react';
import { mount } from 'enzyme';

describe('stepFinder tests:', () => {
    let wrapper;
    const steps = [2, 3, 1, 4, 99, -1];
    const step = 1;
    beforeEach(() => {
        const props = {
            step,
            steps
        }
        wrapper = mount(<StepFinder {...props}/>)
    })
    it('renders without crashing', () => {
        expect(wrapper)
    });
    it('renders all passed steps', () => {
        const steps = wrapper.find('IndividualStep')
        expect(steps).toHaveLength(steps.length)
    })
    it('selects proper element', () => {
        const selected = wrapper.find('IndividualStep').at(2)
        expect(selected.props().selected).toBe(true)
    })
    it('doesnt select other elements', () => {
        const selected = wrapper.find('IndividualStep').first()
        expect(selected.props().selected).not.toBe(true)
    })
})