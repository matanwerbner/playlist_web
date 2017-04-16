import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import HomePage from './containers/HomePage';
import NotFoundPage from './containers/NotFoundPage';
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
export default routes;
