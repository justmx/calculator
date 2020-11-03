import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import TrackerWrapper from './containers/TrackerWrapper';
import Home from './containers/Home';

const App = () => (
  <Router>
    <TrackerWrapper>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
    </Switch>
    </TrackerWrapper>
  </Router>
);

export default App;