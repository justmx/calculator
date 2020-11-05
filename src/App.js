import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import TrackerWrapper from './containers/TrackerWrapper';
import HomePage from './containers/HomePage';

const App = () => (
  <Router>
    <TrackerWrapper>
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />
    </Switch>
    </TrackerWrapper>
  </Router>
);

export default App;