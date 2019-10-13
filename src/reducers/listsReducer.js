
export default (state = [], action) => {

	switch(action.type) {
		case 'FETCH_LISTS':
			return action.payload;
		case 'ADD_LISTS':
			return [...state, action.payload];
		case 'DELETE_LISTS':
			return state.filter(e => e !== action.payload);
		default:
			return state;
	}
};