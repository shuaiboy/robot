import {combineReducers} from 'redux' ;

function dataList(state = [], action){

	switch(action.type){
		case 'RECEIVE_POST':
		return action.data.slice(0) ;

		default :
		return state ;
	}

}


const rootReducers = combineReducers({
  dataList
})

export default rootReducers;

