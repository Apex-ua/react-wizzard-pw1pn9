import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Steps from './Components/Steps';
import Finalise from './Components/Finalise';
import NotFoundPage from './Components/NotFoundPage';



function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Steps />
              </Route>
              <Route path="/steps" component={Steps} />
              <Route path="/finalise">
                <Finalise />
              </Route>
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;