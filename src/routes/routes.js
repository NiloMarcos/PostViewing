import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Erro from '../pages/Erro';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
}