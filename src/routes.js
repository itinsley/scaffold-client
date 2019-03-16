import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import history from './history';
import Callback from './components/Callback/Callback'
import Auth from './Auth/Auth';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/about" render={(props) => <About  {...props} />} />
          <Route path="/users" render={(props) => <Users  {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
