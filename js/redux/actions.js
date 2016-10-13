import fetch from 'isomorphic-fetch';
import assign from 'object-assign';

const actions = {
	getAll() {
		return (dispatch) => {
			dispatch(this.requirePost);
			fetch('http://localhost/robot-react-redux-thunk-php/index.php?func=get_list', {
					mode: 'cors'
				})
				.then((res) => {
					res.json().then((data) => {
						dispatch(this.receivePost(data));
					});
				});
		};
	},

	requirePost: function(){
		return {type: 'REQUIRE_POST'} ;
	},

	//receivePost: (data) => {type: 'RECEIVE_POST', data: data}
	receivePost: function(data) {
		return {
			type: 'RECEIVE_POST',
			data: data
		};
	},

	addTodo: function(){
		return {type: 'ADD_TODO'} ;
	},

	updateTodo: function(data){
		return {type: 'UPDATE_TODO', data: data}  ;
	},

	closeTodo: function(){
		return {type: 'CLOSE_TODO'} ;
	},

	saveTodo: function(data){
		return (dispatch) => {
			var body = [] ;

			dispatch(this.updateTodo(data)) ;
			dispatch(this.requirePost()) ;

			data.func = 'edit' ;
			for(var key in data){
				body.push(key +'='+ data[key]) ;
			}

			fetch('http://localhost/robot-react-redux-thunk-php/index.php',{
				mode: 'cors',
				method: 'POST',
				headers: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				body: body.join('&')
			})
			.then((res) => {
				res.json().then((data) => {
					if(data.code == 200){
						dispatch(this.receivePost(data.data)) ;
					}else{
						console.log('更新失败!') ;
					}
				}) ;
			}) ;
		} ;
	},

	deleteTodo: function(id){
		return (dispatch) => {
			fetch('http://localhost/robot-react-redux-thunk-php/index.php?func=del&id='+id, {mode: 'cors'})
			.then((res) => {
				res.json().then((data) => {
					if(data.code == 200){
						dispatch(this.receivePost(data.data)) ;
					}else{
						console.log('删除失败!') ;
					}
				}) ;
			}) ;
		} ;
	}

};


export {
	actions
};