import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'routes/login/login';
import Document from 'routes/document/document';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/document">
            <Document />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
