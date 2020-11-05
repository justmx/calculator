import { isEmpty } from 'lodash';
import { checkHistoryExists, setLocalHistory } from '../utitls/helper';

export const SET_HISTROY_DATA = 'SET_HISTROY_DATA';
export const CLEAR_HISTROY_DATA = 'CLEAR_HISTROY_DATA';

export const setHistroyData = histroyRecords => ({
	type: SET_HISTROY_DATA,
	histroyRecords,
});

export const initHistory = () => async dispatch => {
	const histroyRecords = await checkHistoryExists();
	if(!isEmpty(histroyRecords)) {
		dispatch(setHistroyData(histroyRecords));
	}
};

export const addHistoryRecord = item => async dispatch => {
	const histroyRecords = await checkHistoryExists();
	const newRecords = histroyRecords.concat(item);
	setLocalHistory(newRecords);
	dispatch(setHistroyData(newRecords));
};

export const removeAllHistory = () => dispatch => {
	setLocalHistory(null);
	dispatch({
		type: CLEAR_HISTROY_DATA,
	});
};