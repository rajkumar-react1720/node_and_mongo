import {delay} from 'redux-saga'
import { put, call} from 'redux-saga/effects';
import { callAxios } from '../services/api';
import actions from '../shared/actionTypes';
import constant from '../shared/constants';
import { showAppLoader, hideAppLoader} from '../actions/appLoader';

export default function* fetchUserDetailsSaga (){
    try{
        const url = constant.fetchUserDetailsUri;
        const response = yield call(callAxios, url, {}, 'GET');
        console.log('Hello User********', response)
        yield put({
            type: actions.FETCH_USER_DETAILS_SUCCESS,
            response: response.data
        });
    }
    catch(err){
        yield put({
            type: actions.FETCH_USER_DETAILS_FAILURE,
            type: actions.HIDE_APP_LOADER,
            response: err
        })
    }
}