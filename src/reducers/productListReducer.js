import actions from '../shared/actionTypes';

const defaultState = {
    products: null
}

const productListReducer = (state = defaultState, action) => {
    console.log('action function', action.response, 'action type', action.type);
    switch (action.type) {
        case actions.FETCH_PRODUCT_LIST_SUCCESS:
        return Object.assign({}, state, {
            products: action.response,
          });

        case actions.FETCH_PRODUCT_LIST_FAILURE:
        return Object.assign({}, state, {
            products: action.response,
        });

        default:
            return state;
    }
}

export default productListReducer;