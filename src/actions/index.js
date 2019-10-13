import DBlists from '../db/db';
import { addList, deleteList } from '../db/db';

export const fetchLists = () => {
	const lists = DBlists;
	return {
		type: 'FETCH_LISTS',
		payload: lists
	};
}

export const addLists = title => {
	addList(title);
	return {
		type: 'ADD_LISTS',
		payload: title
	};
}

export const deleteLists = title => {
	deleteList(title);
	return {
		type: 'DELETE_LISTS',
		payload: title
	};
}