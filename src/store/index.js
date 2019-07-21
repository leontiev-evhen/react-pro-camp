import { createStore, applyMiddleware } from 'redux';
import createSagaMiddlware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddlware();
const loggerMiddleware = createLogger();

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['fixtures'],
};

const reducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware, loggerMiddleware)
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
