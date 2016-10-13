import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import thunkMiddleware from 'redux-thunk';
import {
	createStore,
	applyMiddleware
} from 'redux';
import rootReducers from './redux/reducer';
import {
	actions
} from './redux/actions' ;

const store = applyMiddleware(thunkMiddleware)(createStore)(rootReducers);

store.dispatch(actions.getAll());

ReactDOM.render(
	<App store={store} />,
	document.getElementById('table-div')
);