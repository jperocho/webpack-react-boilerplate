import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/home';
import PageOne from './components/page-one';
import PageTwo from './components/page-two';

const Routes = () => {
  return (
    <div>
      <Route path="/" component={ Home } exact={ true } />
      <Route path="/page-one" component={ PageOne }/>
      <Route path="/page-two" component={ PageTwo }/>
    </div>
  )
}

export default Routes;