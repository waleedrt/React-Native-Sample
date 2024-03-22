import {handleActions} from 'redux-actions';
import {updateAppState} from './syncActions';

const initialState = {
    appHasError: false,
    errorMessage: null,
    isLoading: false
};

export default handleActions({
    [updateAppState]: (state, action) => {
        return {...state, ...action.payload};
    }
}, initialState);
