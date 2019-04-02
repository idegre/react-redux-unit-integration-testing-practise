import { combineReducers } from 'redux';
import { reducer as forms } from 'redux-form';
import main from './main/reducer';
import registration from './registration/reducer';

export default combineReducers({
    main,
    registration,
    form: forms,
});