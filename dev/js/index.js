import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';

const logger = createLogger();
const store1 = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);
const store2 = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
	<div>
    <Provider store={store1}>
        <App />
    </Provider>
    <Provider store={store2}>
        <App />
    </Provider>
    </div>,
    document.getElementById('root')
);
