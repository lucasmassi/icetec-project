import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Site/Login';

import Dashboard from '../pages/Dashboard/Main';
import Developers from '../pages/Dashboard/Developers';
import DevelopersEdit from '../pages/Dashboard/Developers/edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/programadores" exact component={Developers} isPrivate />
      <Route path="/programadores/:id" exact component={DevelopersEdit} isPrivate />
    </Switch>
  );
}