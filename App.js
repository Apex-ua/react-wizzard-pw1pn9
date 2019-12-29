import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Steps from './Components/Steps';
import Finalise from './Components/Finalise';
import NotFoundPage from './Components/NotFoundPage';



function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/steps">Steps</Link>
            </li>
          </ul>
          <div className="App">
            <Switch>
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