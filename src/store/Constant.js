import rootReducer from './Reducer'
import addTodoAction from './Action';
import { createStore } from "redux";

export let store = createStore(rootReducer);
console.log(store.getState())
let testAction = addTodoAction("Test Action");
store.dispatch(testAction);
console.log(store.getState());
