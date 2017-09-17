import React from 'react';
import NavBar from './NavBar2';
import "./Footer.css";

const Footer = ({ match, location }) =>
  <footer className="WorkSpace__footer">
    <NavBar match={match} />
  </footer>;

export default Footer;
