import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const css = require('./app.scss');

// Components
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Routes />
    )
  }
}

ReactDOM.render(
    <App/>,
    document.querySelector('.container')
);