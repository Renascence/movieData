import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Home from './components/home/Home';
import MovieDetail from './components/movieDetail/MovieDetail';
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
    <HashRouter history={history}>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/movieDetail/:id" exact component={MovieDetail} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
