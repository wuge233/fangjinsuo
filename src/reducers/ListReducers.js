const ListReducer = (state=[], action)=>{
	switch(action.type) {
		case 'GET_LIST_DATA':
			return action.payload;
		default:
			return state;
	}
}
export default ListReducer;