import React, {Component} from "react";
import { Link } from "react-router-dom";
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
import { MdPersonPin } from 'react-icons/md';

export class Navigation extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
        Username:''
      };
    }

    logout() {
      this.props.auth.logout();
    }
        
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
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
                <NavItem>
                  <NavLink tag={Link} to="/home">Home</NavLink>
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
                  <NavLink onClick={this.logout.bind(this)} tag={Link} to="/logout">Logout</NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }