import React from 'react';
import {Router, Route, Redirect, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../history/history';

import Index from '../components';

const MainRoutes= ()=> (
  <Router history= {history}>
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  </Router>
)

export default MainRoutes;