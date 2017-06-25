import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainNav from './components/main-nav';
import Home from './components/home';
import PageOne from './components/page-one';
import PageTwo from './components/page-two';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <MainNav />
        <Route path="/" component={ Home } exact={ true } />
        <Route path="/page-one" component={ PageOne }/>
        <Route path="/page-two" component={ PageTwo }/>
      </div>
    </BrowserRouter>
  )
}

export default Routes;