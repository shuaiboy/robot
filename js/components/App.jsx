import Table from './Table.jsx' ;
import Button from './Button.jsx' ;
import Form from './Form.jsx' ;
import Nav from './Nav.jsx' ;
import React, {Component} from 'react' ;
import {actions} from '../redux/actions' ;


 export default class App extends Component{
 	constructor(props){
 		super(props) ;

 		this.state = this.props.store.getState() ;

 		this.handleClick = this.handleClick.bind(this) ;
 		this.listenerStore = this.listenerStore.bind(this) ;
 	}

 	handleClick(){
 		if(this.state.isFormShow){
 			this.props.store.dispatch(actions.closeTodo()) ;
 		}else{
 			this.props.store.dispatch(actions.addTodo()) ;
 		}
 		
 	}

 	listenerStore(){
 		this.setState(this.props.store.getState()) ;
 	}

 	componentDidMount(){
 		this.unsubscribe = this.props.store.subscribe(this.listenerStore) ;
 	}

 	componentWillUnmount(){
 		this.unsubscribe() ;
 	}

 	render(){
 		return (
 			<div>
 				<Nav current="Home" />
	 			<h2 className="top2 factory">TPE SHOW ROOM</h2>
	 			<div className="content-item">
	 				<Table store={this.props.store} />
	 				<Button classIs={['btn-primary', 'robot-delete']} handleClick={this.handleClick}>{this.state.isFormShow ? 'Close' : 'Create'}</Button>
	 				<br />
	 				{this.state.isFormShow ? <Form store={this.props.store} /> : ''}
	 			</div>
 			</div>
 		) ;
 	}
 }