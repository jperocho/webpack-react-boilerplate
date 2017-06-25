import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainNav extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link> | <Link to="/page-one">Page One</Link> | <Link to="/page-two">Page Two</Link>
      </div>
    );
  }
}

export default MainNav;