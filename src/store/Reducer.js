const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add-todo': return {
      tasks: [
        ...state.tasks,
        action.payload,
      ],
    };
    case 'set-checked': return {
      tasks: [...state.tasks.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, checked: !action.payload.checked };
        }
        return item;
      }),
      ],
    };
    case 'set-allChecked': return {
      tasks: [...state.tasks.map((item, i, arr) => {
        return {
          ...item, 
          checked: !arr[0].checked,
        };
      }),
      ],
    };
    case 'del-checked':  return {
      tasks: [
        ...state.tasks.filter( item => item.id !== action.payload.id ) 
      ],
    };
    default: return state;
  }
};
export default rootReducer;
