import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Layouts/Header'
import Home from './views/Home'
import List from './views/List/List';
import Footer from './components/Layouts/Footer'

 
ReactDOM.render(
  <HashRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/list"  >
        <List />
      </Route>
    </Switch>
    <Footer />
  </HashRouter>
  ,
  document.getElementById('root')
);
