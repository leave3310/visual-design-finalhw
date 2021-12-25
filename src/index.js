import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import Header from './components/Layouts/Header'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <Header/>

  </HashRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
