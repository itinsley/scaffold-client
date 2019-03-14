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

function Index() {
  return <h2>Home</h2>;
}

export class Navigation extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
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