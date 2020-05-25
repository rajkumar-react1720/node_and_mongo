
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import fetchUserDetails from '../../src/actions/fetchUserDetails';
import actions from '../../src/shared/actionTypes';
import getMockData from '../shared/mockData'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Invoke to fetch User details', () => {
  beforeEach(function () {
    moxios.install();
  });

  it('Invoke on FETCH_USER_DETAILS_SUCCESS', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getMockData,
      });
    });

    const expectedActions = [
      { type: actions.FETCH_USER_DETAILS_SUCCESS, posts: getMockData },
    ];

    const store = mockStore({ posts: {} });

    store.dispatch(fetchUserDetails()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });

  });
});
