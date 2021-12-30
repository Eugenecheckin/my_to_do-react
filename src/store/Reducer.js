let initialState = {
	item: []
};

const rootReducer = (state = initialState, action) => {
	if (action.type==='add-todo') {
		return {
			       ...state, 
			       item:[
							      new Date().getUTCMilliseconds(),
										action.payload,
										false
									]
					 }
	}
	return state;
}
export default rootReducer;