import React, {Component} from 'react' ;
import assign from 'object-assign' ;
import Button from './Button.jsx' ;
import {actions} from '../redux/actions' ;

export default class Form extends Component{
	constructor(props){
		super(props) ;
		this.updateFormData = {
			'robot_sn': '',
			'controller_sn': '',
			'robot_type': '',
			'site': ''
		} ;

		this.state = assign({}, this.updateFormData, this.props.store.getState().updateFormData) ;
		this.listenerStore = this.listenerStore.bind(this) ;
		this.handleClick = this.handleClick.bind(this) ;
	}

	handleChange(e){
		let name = e.target.getAttribute('name') ;
		let value = e.target.value ;
		this.props.store.dispatch(actions.updateTodo(assign(this.state, {[name]: value}))) ;
	}

	handleClick(){
		this.props.store.dispatch(actions.saveTodo(this.state)) ;
	}

	listenerStore(){
		this.setState(assign({}, this.updateFormData, this.props.store.getState().updateFormData)) ;
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
				<div className="create-content">
			  		<div className="add-content" style={{margin: '0 auto', float:'none', border:0}}>
			  			<form>
				  			<p>
				  				<b>Robot SN:</b>
				  				<input type="text" name="robot_sn" onChange={this.handleChange.bind(this)} value={this.state.robot_sn}/>
				  			</p>
				  			<p>
				  				<b>Controller SN:</b>
				  				<input type="text" name="controller_sn" onChange={this.handleChange.bind(this)} value={this.state.controller_sn}/>
				  			</p>
				  			<p>
				  				<b>Robot Type:</b>
				  				<input type="text" name="robot_type" onChange={this.handleChange.bind(this)} value={this.state.robot_type}/>
				  			</p>
				  			<p>
				  				<b>Site:</b>
				  				<input type="text" name="site" onChange={this.handleChange.bind(this)} value={this.state.site}/>
				  			</p>
			  			</form>
			  		</div>
		  		</div>
		  		<p className="subm">
		  			<Button classIs={['btn-primary', 'submit-add']} handleClick={this.handleClick}>Save</Button>
		  			<Button classIs={['btn-primary', 'cancel-add']}>Cancel</Button>
		  		</p>
			</div>
		) ;
	}
}