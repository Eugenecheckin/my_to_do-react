import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';

import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/Reducer';
import oldState, { saveState } from './store/Store';

const store = createStore(rootReducer, oldState, applyMiddleware(logger));

store.subscribe(() => {
  saveState(store.getState());
});

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  app,
  document.getElementById('root'),
);

reportWebVitals();
