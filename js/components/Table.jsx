import React, {Component} from 'react' ;
import Button from './Button.jsx' ;

class Table extends Component{
	constructor(props){
		super(props) ;
		this.state = this.props.store.getState() ;

		this.listenerStore = this.listenerStore.bind(this) ;
	}

	handleClick(){
		console.log('handleClick') ;
	}

	handleDelClick(){
		console.log('handleDelClick') ;
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
				<tr key={'item=' + i}>
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