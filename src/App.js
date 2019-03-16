import React, { Component } from 'react';
import './App.css';
import {Navigation} from './containers/Navigation';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
            <Navigation  auth = {this.props.auth}/>
            <div className="main-content-container container-fluid px-4">
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;