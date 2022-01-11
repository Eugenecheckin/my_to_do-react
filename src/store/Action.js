function addTodoAction(todosItem) {
  return {
    type: 'add-todo',
    payload: todosItem,
  };
}
export default addTodoAction;

export function setAllChecked(checked) {
  return {
    type: 'set-allChecked',
    payload: checked,
  };
}
