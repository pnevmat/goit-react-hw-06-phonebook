import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import PhoneBook from './App';

import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PhoneBook />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
