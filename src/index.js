import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const css = require('./app.scss');

// Components
import MainNav from './components/main-nav';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainNav />
          <Routes />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
    <App/>,
    document.querySelector('.container')
);