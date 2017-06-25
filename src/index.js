import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const css = require('./app.scss');

class App extends Component {
  render() {
    return (
      <div>
        <h4>Hello World React Template</h4>
      </div>
    )
  }
}

ReactDOM.render(
    <App/>,
    document.querySelector('.container')
);