import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Users from './components/Users';
import history from './history';

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App  {...props} />} />
          <Route path="/about" render={(props) => <About  {...props} />} />
          <Route path="/users" render={(props) => <Users  {...props} />} />
        </div>
      </Router>
  );
}
