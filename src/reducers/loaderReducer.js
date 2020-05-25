import actions from '../shared/actionTypes';

const defaultState = {
    startspinner: null
}

const spinnerReducer = (state = defaultState, action) => {
    console.log('Spinner Reducer', action);
    switch (action.type) {
        case actions.SHOW_APP_LOADER:
        return Object.assign({}, state, {
            startspinner: action.response,
          });

        case actions.HIDE_APP_LOADER:
        return Object.assign({}, state, {
            startspinner: action.response,
        });

        default:
            return state;
    }
}

export default spinnerReducer;