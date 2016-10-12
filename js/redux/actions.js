import fetch from 'isomorphic-fetch';
import assign from 'object-assign';

const actions = {
	getAll() {
		return (dispatch) => {
			dispatch(this.requirePost);
			fetch('http://localhost/robot-react-redux-thunk/robot-react-redux-thunk-php/index.php?func=get_list', {
					mode: 'cors'
				})
				.then((res) => {
					res.json().then((data) => {
						dispatch(this.receivePost(data));
					});
				});
		};
	},

	requirePost: () => {
		type: 'REQUIRE_POST'
	},

	//receivePost: (data) => {type: 'RECEIVE_POST', data: data}
	receivePost: function(data) {
		return {
			type: 'RECEIVE_POST',
			data: data
		};
	},



};


export {
	actions
};