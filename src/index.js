import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todos from './components/todos';
import { Provider } from 'react-redux';
import Store from './store';

import registerServiceWorker from './registerServiceWorker';
const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Todos />
  </Provider>
, document.getElementById('root')
);

registerServiceWorker();
