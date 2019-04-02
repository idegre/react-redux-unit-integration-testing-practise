import React from 'react';
import BreedPage from './breedPage';
import { mount } from 'enzyme';

describe('breedPage tests', () => {
    let props = {};
    let wrapper;
    beforeEach(()=>{
        props = {
            history: {
                push: () => {}
            },
            breed: 'test breed',
            photo: 'photo source',
        }
        wrapper = mount(<BreedPage {...props} />);
    })
    afterEach(() => {
        wrapper.unmount()
    })
    it('renders without crashing', () => {
        expect(wrapper)
    });
    it('has title matching props', () => {
        const title = wrapper.find('h2').text();
        const { breed } = wrapper.props()
        expect(title).toBe(breed)
    })
    it('has image matching props', () => {
        const imageSource = wrapper.find('img').prop('src');
        const { photo } = wrapper.props()
        expect(imageSource).toBe(photo)
    })
})
