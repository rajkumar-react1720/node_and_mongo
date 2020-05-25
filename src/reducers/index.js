import { combineReducers } from 'redux';
import fetchUserDetailsReducer from './fetchUserDetailsReducer';
import productListReducer from './productListReducer';
import spinnerReducer from './loaderReducer';


const reducers = combineReducers({
    fetchUserDetailsReducer,
    productListReducer,
    spinnerReducer
});

export default reducers;