const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('redux_todo_store');
    if (!serialisedState) return undefined;
    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};
const oldState = loadState();

export const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);

    window.localStorage.setItem('redux_todo_store', serialisedState);
  } catch (err) {
    console.log(err);
  }
};

export default oldState;
