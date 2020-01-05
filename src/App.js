import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'routes/login/login';
import Document from 'routes/document/document';
import WithAuth from 'hoc/withAuth';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/document">
            <WithAuth component={Document} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
