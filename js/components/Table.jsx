import React, {Component} from 'react' ;
import Button from './Button.jsx' ;
import {actions} from '../redux/actions' ;

class Table extends Component{
	constructor(props){
		super(props) ;
		this.state = this.props.store.getState() ;

		this.listenerStore = this.listenerStore.bind(this) ;
		this.handleClick = this.handleClick.bind(this) ;
		this.handleDelClick = this.handleDelClick.bind(this) ;
	}

	handleClick(e){
		let id = e.target.parentNode.parentNode.getAttribute('id') ;
		let obj = {} ;
		this.state.dataList.forEach((item) =>{
			if(id == item.id){
				obj = item ;
			}
		}) ;


		this.props.store.dispatch(actions.updateTodo(obj)) ;
	}

	handleDelClick(e){
		let id = e.target.parentNode.parentNode.getAttribute('id') ;
		this.props.store.dispatch(actions.deleteTodo(id)) ;
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
		var trHtml = [] ;
		trHtml = this.state.dataList.map((item, i) => {
			return (
				<tr key={'item=' + i} id={item.id}>
					<td>{item.robot_sn}</td>
					<td>{item.robot_type}</td>
					<td>{item.controller_sn}</td>
					<td>{item.site}</td>
					<td>{item.last_update_time}</td>
					<td>
						<Button classIs={['btn-primary', 'robot-delete']} handleClick={this.handleClick}>更新</Button>
						&nbsp;&nbsp;
						<Button classIs={['btn-primary', 'robot-delete']} handleClick={this.handleDelClick}>删除</Button>
					</td>
				</tr>	
			) ;
		}) ;
		return (
			<table className="table table-bordered table-list">
	 			<thead>
	 				<tr>
	 					<th>Robot SN</th>
	 					<th>Robot Type</th>
	 					<th>Controller SN</th>
	 					<th>Site</th>
	 					<th>Last Updated Time</th>
	 					<th>Function</th>
	 				</tr>
	 			</thead>
	 			<tbody>
	 				{trHtml}
	 			</tbody>
	 		</table>
		) ;
	}
}

export default Table ;