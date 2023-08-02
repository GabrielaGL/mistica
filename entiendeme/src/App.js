import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

import Main from './components/main';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
