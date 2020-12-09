import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from './Home';

const Router: React.FC = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
