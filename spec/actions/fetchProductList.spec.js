import actions from '../../src/shared/actionTypes';
import { fetchProductList } from '../../src/actions/fetchProductList';

describe('fetchProductList action', () => {
  it('Should return FETCH_PRODUCT_LIST', () => {
    expect(fetchProductList({})).toEqual({
      type: actions.FETCH_PRODUCT_LIST
    });
  });
});