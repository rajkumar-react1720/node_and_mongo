import fetchProductListSaga from '../../src/sagas/fetchProductListSaga';
import actions from '../../src/shared/actionTypes';
import constants from '../../src/shared/constants';
import { testSaga } from 'redux-saga-test-plan';
import { callAxios } from '../../src/services/api';

describe('fetchProductListSaga', () => {
  let saga;
  let url = constants.fetchProductList;

  it('should return FETCH_PRODUCT_LIST_SUCCESS', () => {

    saga = testSaga(fetchProductListSaga, {});
    const response = []
    saga
      .next()
      .call(callAxios, url, {}, 'GET')
      .next(response)
      .put({
        type: actions.FETCH_PRODUCT_LIST_SUCCESS,
        response: response.data
      })
      .next()
      .isDone();
  });
});