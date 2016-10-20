import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app';
import Home from './pages/home';
import About from './pages/about';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="*" component={About} />
  </Route>
);
