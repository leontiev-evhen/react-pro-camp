import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reducer from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootSaga from './sagas';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware, loggerMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
