import { SET_HISTROY_DATA, CLEAR_HISTROY_DATA } from '../actions/init';

let initialState = {
	histroyRecords: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_HISTROY_DATA:
			return { 
		        ...state,
		        histroyRecords: action.histroyRecords
		    };
		case CLEAR_HISTROY_DATA:
			return initialState;
		default:
			return state;
	}
};