import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
