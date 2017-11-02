const IndexReducer = (state=[], action)=>{
	switch(action.type) {
		case 'GET_IMGS':
			return action.payload;
		case 'GET_LIST_DATA':
			return action.payload;
		default:
			return state;
	}
}
export default IndexReducer;