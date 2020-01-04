import React from 'react';
import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';

import Step from './Step';
// import Step1 from './Step1';

function Steps() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/1`}>Step 1</Link>
        </li>
        <li>
          <Link to={`${url}/2`}>Step 2</Link>
        </li>
      </ul>
      <h2>Steps</h2>
      <Switch>
        <Route path={`${path}/:stepId`}>
          <Step />
        </Route>
      </Switch>
    </div>
  );
}

export default Steps;

      // <Switch>
      //   <Route exact path={path}>
      //     <h3>Please select a topic.</h3>
      //   </Route>
      //   <Route path={`${path}/:topicId`}>
      //     <Topic />
      //   </Route>
      // </Switch>