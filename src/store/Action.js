const addTodoAction = todosItem => {
  return {
    type: 'add-todo',
    payload: todosItem
  }
}
export default addTodoAction;
