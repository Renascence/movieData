import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './components/home/Home';
import getRencentMovies from './service';
import movie from './reducers/home';
import { HOME_DATA } from './actions/home';

const store = createStore(combineReducers({
  movie,
  routing: routerReducer,
}));

const history = syncHistoryWithStore(createBrowserHistory(), store);

history.listen(async () => {
  if (window.location.pathname === '/') {
    const data = await getRencentMovies();
    store.dispatch({ type: HOME_DATA, payload: data.subjects });
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" exact component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
