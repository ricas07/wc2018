import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header/Header';
import Row from './Row/Row';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='http://pluspng.com/img-png/fifa-world-cup-2018-logo-png-official-television-fifa-world-cup-2018-429.png' alt="world cup logo" className='App-trophy'/>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <Header />
          <Row name='Colton' />
          <Row name='David' />
          <Row name='Kent' />
          <Row name='Mufiz' />
          <Row name='Ricardo' />
          <Row name='Shellie' />
          <Row name='Sterling' />
        </div>
      </div>
    );
  }
}

export default App;
