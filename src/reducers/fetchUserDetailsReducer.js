import actions from '../shared/actionTypes';

const defaultState = {
    data: []
}

const fetchUserDetailsReducer = (state = defaultState, action) => {
    console.log('action in function', action.response);
    switch (action.type) {
        case actions.FETCH_USER_DETAILS_SUCCESS:
        return Object.assign({}, state, {
            data: action.response,
          });

        case actions.FETCH_USER_DETAILS_FAILURE:
        return Object.assign({}, state, {
            data: action.response,
        });

        default:
            return state;
    }
}

export default fetchUserDetailsReducer;