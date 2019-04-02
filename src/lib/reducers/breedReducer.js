import constants from 'utils/breedsConstants'

const {
    SET_BREED,
    SET_BREEDS_LIST,
    SET_LOADING,
    SET_BREED_PHOTO,
} = constants;

export default (state = { list: [] }, {type, payload}) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: payload.loading
            }

        case SET_BREED_PHOTO:
            return {
                ...state,
                photo: payload.photo
            }

        case SET_BREED:
            return {
                ...state,
                breed: payload.breed
            }
        case SET_BREEDS_LIST:
            return {
                ...state,
                list: [ ...payload.list ]
            }

        default:
            return { ...state };
    }
}