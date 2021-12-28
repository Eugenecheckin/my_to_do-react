import { combineReducers } from "redux";

let initialState = {
	items: []
};
export const rootReducer = combineReducers({
	items: addItemreducer
})
const addItemreducer = (state = initialState, action) => {
	return state;
}