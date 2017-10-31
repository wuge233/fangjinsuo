const IndexReducer = (state=[], action)=>{
	switch(action.type) {
		case 'GET_IMGS':
			return action.payload;
		default:
			return state;
	}
}
export default IndexReducer;