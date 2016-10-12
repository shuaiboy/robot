import Table from './Table.jsx' ;
import Button from './Button.jsx' ;
import Form from './Form.jsx' ;
import React, {Component} from 'react' ;
import thunkMiddleware from 'redux-thunk';
import {
	createStore,
	applyMiddleware
} from 'redux';
import rootReducers from '../redux/reducer';
import {
	actions
} from '../redux/actions'

const store = applyMiddleware(thunkMiddleware)(createStore)(rootReducers);

store.dispatch(actions.getAll());

 export default class App extends Component{
 	constructor(props){
 		super(props) ;
 	}

 	render(){
 		return (
 			<div>
 				<Table store={store} />
 				<Button classIs={['btn-primary', 'robot-delete']}>Create</Button>

 				<Form store={store} />
 			</div>
 		) ;
 	}
 }