import React, {Component} from 'react' ;

class Button extends Component{
	constructor(props){
		super(props) ;
	}

	hendleClick(e){
		if(this.props.handleClick){
			this.props.handleClick(e) ;
		}
	}

	render(){
		return(
			<button className={'btn' + (this.props.classIs && this.props.classIs.length ? ' ' + this.props.classIs.join(' ') : '')} onClick={this.hendleClick.bind(this)}>{this.props.children}</button>
		) ;
	}
}

export default Button ;