import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown,
   MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


const NavLink = ({ to, eventKey, children }) =>
  <LinkContainer to={to} eventKey={eventKey}>
    <NavItem>{children}</NavItem>
  </LinkContainer>;

const MenuLink = ({ to, eventKey, children }) =>
  <LinkContainer to={to} eventKey={eventKey}>
    <MenuItem>{children}</MenuItem>
  </LinkContainer>;

const NavBar = ({ match }) =>
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Musio</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavLink to="./dashboard" eventKey={1}>
          Dashboard
        </NavLink>
        <NavLink to="./pricing" eventKey={2}>
          Pro
        </NavLink>
        <NavDropdown eventKey={3} title="Pro features" id="basic-nav-dropdown">
          <MenuLink to="/profile" eventKey={3.1}>
            AI
          </MenuLink>
          <MenuLink to="/help" eventKey={3.2}>
            Advisor
          </MenuLink>
          <MenuLink to="/account/logOut" eventKey={3.3}>
            Online English
          </MenuLink>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavLink to="./" eventKey={4}>
          Upgrade to Pro
        </NavLink>
        <NavDropdown eventKey={5} title="John Smith" id="basic-nav-dropdown">
          <MenuLink to="/profile" eventKey={5.1}>
            Profile
          </MenuLink>
          <MenuLink to="/help" eventKey={5.2}>
            Help
          </MenuLink>
          <MenuItem divider />
          <MenuLink to="/account/logOut" eventKey={5.3}>Log Out</MenuLink>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

export default NavBar;
