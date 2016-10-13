import React, {Component} from 'react' ;

export default class Nav extends Component{
	constructor(props){
		super(props) ;

		this.state = {
			navList: [
				'Home',
				'Robot Monitor',
				'Work Rate',
				'Alarm History',
				'Alarm Notification',
				'Technical Support',
				'Robot Data',
				'Robot Management'
			]
		} ;
	}

	render(){
		let liArr = [] ;
		liArr = this.state.navList.map((item, i) => {
			return <div key={'nav_'+i} className={'list list' + (i+1) + (this.props.current == item ? ' current' : '')}><a href="#">{item}</a></div> ;
		}) ;

		return (
			<div className="top1 row">
				{liArr}
			</div>
		) ;
	}
} ;

Nav.defaultProps = {
	current: 'Robot Management'
} ;