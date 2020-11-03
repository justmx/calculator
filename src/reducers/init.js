import { SET_HISTROY_DATA, CLEAR_HISTROY_DATA } from '../actions/init';
import { checkHistoryExists, setLocalHistory } from '../utitls/helper';

let initialState = {
	histroy_records: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_HISTROY_DATA:
			return { 
		        ...state,
		        histroy_records: action.histroy_records
		    };
		case CLEAR_HISTROY_DATA:
			return initialState;
		default:
			return state;
	}
};