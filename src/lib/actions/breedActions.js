import { createAction } from 'redux-actions';
import { fetchBreedList, fetchBreed } from 'utils/API';
import constants from 'utils/breedsConstants'

const {
    SET_BREED,
    SET_BREEDS_LIST,
    SET_LOADING,
    SET_BREED_PHOTO,
} = constants;

const setListAction = createAction(SET_BREEDS_LIST, list => ({ list: list }));
const setLoading = createAction(SET_LOADING, loading => ({ isLoading: loading }))

export const getBreedList = () => async dispatch => {
    const res = await fetchBreedList();
    dispatch(setLoading(true));
    const { message: breedsList } = res.data;
    dispatch(setListAction(breedsList));
    dispatch(setLoading(false));
};

const setSelectedBreedAction = createAction(SET_BREED, breed => ({ breed }));
const setBreedPhotoAction = createAction(SET_BREED_PHOTO, photo => ({ photo }));

export const getBreed = (breed, history) => async dispatch => {
    const res = await fetchBreed(breed);
    dispatch(setLoading(true));
    const { message: selectedBreedPhoto } = res.data;
    dispatch(setBreedPhotoAction(selectedBreedPhoto));
    dispatch(setSelectedBreedAction(breed));
    dispatch(setLoading(false));
    history.push(`/breed/${breed}`);
};