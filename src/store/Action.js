const addTodoAction = text => {
  return {
    type: 'add-todo',
    payload: text
  }
}
export default addTodoAction;