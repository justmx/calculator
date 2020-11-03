import localforage from 'localforage';
import { isEmpty } from 'lodash';


export const checkHistoryExists = async () => {
	const result = await localforage.getItem('history');
	return result || [];
};

export const setLocalHistory = history => {
	if (isEmpty(history)) {
		localforage.removeItem('history', history);
		return;
	}

	localforage.setItem('history', history);
};