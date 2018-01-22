import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import MovieDetail from './components/movieDetail/MovieDetail';
import movie from './reducers/home';

const store = createStore(combineReducers({
  movie,
  routing: routerReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route component={Nav} />
        <Route path="/" exact component={Home} />
        <Route path="/movieDetail/:id" exact component={MovieDetail} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
