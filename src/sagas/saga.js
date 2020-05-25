
import { takeLatest } from 'redux-saga/effects';
import actions from '../shared/actionTypes';
import fetchProductListSaga from './fetchProductListSaga';
import fetchUserDetailsSaga from './fetchUserDetailsSaga';


export default function* saga() {
    yield takeLatest(actions.FETCH_PRODUCT_LIST, fetchProductListSaga);
    yield takeLatest(actions.FETCH_USER_DETAILS, fetchUserDetailsSaga);
}