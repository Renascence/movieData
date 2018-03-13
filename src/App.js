import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import Nav from './components/nav/Nav';
import movie from './reducers/home';
import Bundle from './components/bundle/Bundle';
import mySaga from './actions/homeSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
  movie,
  routing: routerReducer,
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

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
