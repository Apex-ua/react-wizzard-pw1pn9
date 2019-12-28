import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Step1 from './Step1';

function Steps() {
  return (
      <Switch>
        <Route path="/1" component={Step1} />
      </Switch>
  );
}

export default Steps;