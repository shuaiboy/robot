import {combineReducers} from 'redux' ;
import assign from 'object-assign' ;

//table list
function dataList(state = [], action){

	switch(action.type){
		case 'RECEIVE_POST':
		return action.data.slice(0) ;

		default :
		return state ;
	}
}

//form 和 create按钮是否显示
function isFormShow(state = false, action){
	switch(action.type){
		case 'ADD_TODO':
		return 'create' ;

		case 'UPDATE_TODO':
		return 'update' ;

		case 'CLOSE_TODO':
		return false ;

		default:
		return state ;
	}
}

//update form data
function updateFormData(state = {}, action){
	switch(action.type){
		case 'ADD_TODO':
		return {} ;

		case 'UPDATE_TODO':
		return assign({}, action.data) ;

		default: 
		return state ;
	}
}


const rootReducers = combineReducers({
  dataList,
  isFormShow,
  updateFormData
}) ;

export default rootReducers;

