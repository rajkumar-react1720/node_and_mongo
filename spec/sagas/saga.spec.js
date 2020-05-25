import actions from '../../src/shared/actionTypes';
import { testSaga } from 'redux-saga-test-plan';
import saga from '../../src/sagas/saga';
import fetchProductListSaga from '../../src/sagas/fetchProductListSaga';

describe('saga', () => {
  it(`should return DATA
    `, () => {
    let sagaTest = testSaga(saga, {});
    sagaTest
      .next()
      .takeLatestEffect(actions.FETCH_PRODUCT_LIST, fetchProductListSaga)
      .next()
      .isDone()
      .finish();
  });
});