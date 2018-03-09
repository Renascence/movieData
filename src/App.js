import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import Nav from './components/nav/Nav';
import movie from './reducers/home';
import Bundle from './components/bundle/Bundle';

const store = createStore(combineReducers({
  movie,
  routing: routerReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route component={Nav} />
        <Route
          path="/"
          exact
          render={() => (
            <Bundle load={require('bundle-loader?lazy!./components/home/Home')}>
              {Home => <Home />}
            </Bundle>)
          }
        />
        <Route
          path="/movieDetail/:id"
          exact
          render={props => (
            <Bundle load={require('bundle-loader?lazy!./components/movieDetail/MovieDetail')}>
              {MovieDetail => <MovieDetail {...props} />}
            </Bundle>)
          }
        />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
