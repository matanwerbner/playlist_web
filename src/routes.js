import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PlPage from './containers/PlPage/';
import NewPlPage from './containers/NewPlPage';
import App from './containers/App';
import HomePage from './containers/HomePage';
import NotFoundPage from './containers/NotFoundPage';
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/playlist/:PlId" component={PlPage} />
    <Route path="/new" component={NewPlPage} />
    
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
export default routes;
