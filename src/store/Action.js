import { ADD_TODO, SET_ALLCHECKED } from './Types';

function addTodoAction(todosItem) {
  return {
    type: ADD_TODO,
    payload: todosItem,
  };
}
export default addTodoAction;

export function setAllChecked(checked) {
  return {
    type: SET_ALLCHECKED,
    payload: checked,
  };
}
