import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import About from '../components/About';
import Users from '../components/Users';
import { Auth } from 'aws-amplify';
import { MdPersonPin } from 'react-icons/md';

function Index() {
  return <h2>Home</h2>;
}

export class Navigation extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
        Username:''
      };
    }

    componentDidMount(){
      const _this = this;
      const fetchCurrentSession = Auth.currentSession();
      const fetchCurrentUser = Auth.currentUserInfo();
      Promise.all([fetchCurrentSession, fetchCurrentUser]).then(function(results){
        const session = results[0];
        const user = results[1];
        console.log("Session", session)
        console.log("User", user)
        localStorage.setItem('jwtToken', session.idToken.jwtToken);
        // This is not being retrieved for some reason - maybe Cognito cached response?
        localStorage.setItem('isAdmin', user.attributes['custom:isAdmin']);
  
        _this.setState({
          Username: user.username
        });
      })
    }
  
    logout(){
      Auth.signOut()
      window.location.reload()
    }


    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">HOME</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink tag={Link} to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/users">Users</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Drop Down
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem>
                      <NavLink tag={Link} to="/about">About</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink tag={Link} to="/users">Users</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink  className='disabled-link'><MdPersonPin />  {this.state.Username}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.logout} tag={Link} to="/logout">Logout</NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />

        </div>

        </Router>
      );
    }
  }