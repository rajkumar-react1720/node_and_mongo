import { delay } from 'redux-saga'
import { put, call, all } from 'redux-saga/effects';
import { callAxios } from '../services/api';
import actions from '../shared/actionTypes';
import constant from '../shared/constants';

export default function* fetchProdcutListSaga() {
    try {
       // yield put({ type: actions.SHOW_APP_LOADER, response: true })
        const url = constant.fetchProductList;
        //yield delay(10000)
        const response = yield call(callAxios, url, {}, 'GET');
        console.log('Hello products', response.data)

        yield all([
            put({
                type: actions.FETCH_PRODUCT_LIST_SUCCESS,
                response: response.data,
            }),
            put({ type: actions.HIDE_APP_LOADER, response: false })
        ])
    }
    catch (err) {
        yield all([
            put({
                type: actions.FETCH_PRODUCT_LIST_FAILURE,
                response: err
            }),
            put({ type: actions.HIDE_APP_LOADER, response: false })
        ])
    }
}