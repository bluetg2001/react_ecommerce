import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducers from './reducers';
import './components/css/core.css'

const myStore = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
