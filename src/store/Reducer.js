import {
  ADD_TODO, SET_CHECKED, EDIT_ITEM, SET_ALLCHECKED, DEL_CHECKED, DEL_ALLCHECKED,
} from './Types';

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: return {
      tasks: [
        ...state.tasks,
        action.payload,
      ],
    };
    case SET_CHECKED: return {
      tasks: [...state.tasks.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, checked: !action.payload.checked };
        }
        return item;
      }),
      ],
    };
    case EDIT_ITEM: return {
      tasks: [...state.tasks.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, checked: false, title: action.payload.title };
        }
        return item;
      }),
      ],
    };
    case SET_ALLCHECKED: return {
      tasks: [...state.tasks.map((item, i, arr) => ({
        ...item,
        checked: !action.payload,
      })),
      ],
    };
    case DEL_CHECKED: return {
      tasks: [
        ...state.tasks.filter(item => item.id !== action.payload.id),
      ],
    };
    case DEL_ALLCHECKED: return {
      tasks: [
        ...state.tasks.filter(item => {
          if (action.payload.id.findIndex(element => element === item.id) === -1) return true;
        }),
      ],
    };
    default: return state;
  }
};
export default rootReducer;
