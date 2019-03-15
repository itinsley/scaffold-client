import React, { Component } from 'react';
import './App.css';
import {Navigation} from './containers/Navigation';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure({
  Auth: {                          
      identityPoolId: process.env.REACT_APP_COGNITO_IDENTITYPOOLID, //REQUIRED - Amazon Cognito Identity Pool ID
      region: process.env.REACT_APP_AWS_REGION, // REQUIRED - Amazon Cognito Region
      userPoolId: process.env.REACT_APP_COGNITO_USERPOOLID, //OPTIONAL - Amazon Cognito User Pool ID
      userPoolWebClientId: process.env.REACT_APP_COGNITO_USERPOOLWEBCLIENTID, //OPTIONAL - Amazon Cognito Web Client ID
  }
});

class App extends Component {
  render() {
      return (
          <div className="container-fluid">
              <div className="row">
                  <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
                      <Navigation/>
                      <div className="main-content-container container-fluid px-4">
                      </div>
                  </main>
              </div>
          </div>
      );
  }
}

export default withAuthenticator(App);