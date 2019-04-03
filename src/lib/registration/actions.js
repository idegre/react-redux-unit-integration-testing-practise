import qs from 'qs'
import { createAction } from 'redux-actions';
import constants from './constants'

const saveValues = createAction(constants.SAVE_VALUES, values => ({ values: values }));

export const setValues = (values, history) => dispatch => {
    dispatch(saveValues(values))
    history.push({
        pathname:'/finalize',
    })
}

export const goToStep = (history, step) => () => history.push({
    pathname:'/registration',
    search: qs.stringify({ step })
})