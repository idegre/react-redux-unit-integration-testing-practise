import { getBreedList, getBreed } from './../breedActions'
import { fetchBreed } from '../../utils/API';

describe('breed actions tests', () => {
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn()
    })
    it('getBreedList calls API function', () => {
        const fetchBreedList = jest.fn(() => new Promise(resolve => resolve()));
        getBreedList()();
        expect(fetchBreedList).toBeCalledTimes(1);
    })
    it('getBreedList calls API function', () => {
        const fetchBreedList = jest.fn(() => new Promise(resolve => resolve()));
        getBreedList(dispatch)(dispatch);
        expect(dispatch).toBeCalled();
    })
})