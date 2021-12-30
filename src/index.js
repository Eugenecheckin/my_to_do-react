import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/Reducer';

const store = createStore(rootReducer);
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
