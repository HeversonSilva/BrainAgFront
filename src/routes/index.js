import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Info from '../pages/Info';
import Add from '../pages/Add';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/register" component={Add} />
      <Route path="/information/:id" component={Info} />
    </Switch>
  );
}
