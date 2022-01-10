import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger'

import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/Reducer';

const store = createStore(rootReducer, applyMiddleware(logger));
const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

render (
  app,
  document.getElementById('root')
);

reportWebVitals();
