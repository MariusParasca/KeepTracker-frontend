import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'routes/login/login';
import Document from 'routes/document/document';
import WithAuth from 'hoc/withAuth';
import Spinner from 'components/Spinner/Spinner';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/document">
          <WithAuth component={Document} />
        </Route>
        <Route path="/spinner">
          <Spinner />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
