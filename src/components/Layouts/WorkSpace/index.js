import React from 'react';

import Header from "./Header";
import Footer from "./Footer";

import "./main.css";

const WorkSpaceLayout = ({ match, children: Content }) => (
  <div className="WorkSpace">
    <Header match={match} />
    <section className="container container-fluid">
      {Content}
    </section>
    <Footer match={match} />
  </div>
);

export default WorkSpaceLayout;
