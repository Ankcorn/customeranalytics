import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Table, Filters, User } from './components' 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="header">
          <h1>Customer Analytics</h1>
          <User />
        </Header>
        <div className="content">
        <Filters className="filters">
          
        </Filters>
        <Table className="table"/>
        </div>
      </div>
    );
  }
}

export default App;
