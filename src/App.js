import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import {Navigation} from './containers/Navigation';
const PlantInfo={};

class App extends Component {
  render() {
      return (
          <div className="container-fluid">
              <div className="row">
                  <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
                      <Navigation/>
                      <div class="main-content-container container-fluid px-4">
                          {/* <Route  path="/plantInfo" component={PlantInfo}  /> */}
                      </div>
                  </main>
              </div>
          </div>
      );
  }
}

export default App;