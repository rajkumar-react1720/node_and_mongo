import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas/saga';
import reducers from '../reducers/index';


const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(sagaMiddleware, logger)) 
    //composeEnhancer(applyMiddleware(promiseMiddleware, thunk, logger))
)
sagaMiddleware.run(saga);

export default store;


