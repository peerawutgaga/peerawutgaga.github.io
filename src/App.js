import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="col" style={{ height: '100px' }}>
          <Header />
        </div>
      </div>
    );
  }
};