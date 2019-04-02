import reducer from '../breedReducer';
import constants from '../../utils/breedsConstants'
const {
    SET_BREED,
    SET_BREEDS_LIST,
    SET_LOADING,
    SET_BREED_PHOTO,
} = constants;

const cases = [
    {type: 'not a known action', payload: {}, result: {}, initialState: {}},
    {type: SET_BREED, payload: {breed: 'dog'}, result: {breed: 'dog'}, initialState: {breed: 'cat'}},
    {type: SET_BREEDS_LIST, payload: {list: ['dog']}, result: {list: ['dog'], breed: 'cat'}, initialState: {breed: 'cat'}},
    {type: SET_LOADING, payload: {loading: false}, result: {breed: 'cat', isLoading: false}, initialState: {breed: 'cat'}},
    {type: SET_BREED_PHOTO, payload: {photo: 'kodak'}, result: {breed: 'dog', photo: 'kodak'}, initialState: {breed: 'dog'}},
    {type: SET_LOADING, payload: {loading: false}, result: {isLoading: false}, initialState: {isLoading: true}},
]

describe('breedReducer tests', () => {
    cases.forEach(({type, payload, result, initialState}) => {
        it(`case: ${type}`, () => {
            expect(reducer(initialState, {type, payload})).toEqual(result)
        })
    })
})