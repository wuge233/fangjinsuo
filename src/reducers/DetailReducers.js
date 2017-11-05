const DetailReducer = (state={}, action)=>{
	switch(action.type) {
		case 'GET_DETAIL_DATA':
			return action.payload;
		default:
			return state;
	}
}
export default DetailReducer;