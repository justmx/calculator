import { isEmpty } from 'lodash';
import { checkHistoryExists, setLocalHistory } from '../utitls/helper';

export const SET_HISTROY_DATA = 'SET_HISTROY_DATA';
export const CLEAR_HISTROY_DATA = 'CLEAR_HISTROY_DATA';

export const setHistroyData = histroy_records => ({
	type: SET_HISTROY_DATA,
	histroy_records,
});

export const initHistory = () => async dispatch => {
	const histroy_records = await checkHistoryExists();
	if(!isEmpty(histroy_records)) {
		dispatch(setHistroyData(histroy_records));
	}
};

export const addHistoryRecord = item => async dispatch => {
	const histroy_records = await checkHistoryExists();
	const new_records = histroy_records.concat(item);
	setLocalHistory(new_records);
	dispatch(setHistroyData(new_records));
};

export const removeAllHistory = () => dispatch => {
	setLocalHistory(null);
	dispatch({
		type: CLEAR_HISTROY_DATA,
	});
};