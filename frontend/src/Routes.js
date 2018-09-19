import React from 'react';
import 'normalize.css';
import { Home } from './views/Home';
import { About } from './views/About';
import { ResultsView } from './views/Results';
import { NoMatch } from './views/NoMatch';
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/Results" component={ResultsView} />
        <Route component={NoMatch} />
      </Switch>
    </React.Fragment>
  );
};
