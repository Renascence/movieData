import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './components/App';

const store = createStore(combineReducers({
  routing: routerReducer,
}));

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" exact component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
