import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const middlewares = [];
const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

middlewares.push(sagaMiddleware);

const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;
