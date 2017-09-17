import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

var fb = require('../../../statics/follow-48.png');
var instagram = require('../../../statics/follow-49.png');
var twitter = require('../../../statics/follow-50.png');
var youtube = require('../../../statics/follow-51.png');

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
    <Navbar.Collapse>
      <Nav>
        <a to="https://www.facebook.com/musioAKA">
          <Image src={fb} circle />
        </a>
        <a to="https://www.instagram.com/musio_aka/">
          <Image src={instagram} circle />
        </a>
        <a to="https://twitter.com/Musio_AKA">
          <Image src={twitter} circle />
        </a>
        <a to="https://www.youtube.com/channel/UCHXmMzxX7cMVPaLihhcTGLA">
          <Image src={youtube} circle />
        </a>
      </Nav>
      <Nav pullRight>
        <NavLink to="./" eventKey={4}>
          Upgrade to Pro
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

export default NavBar;
