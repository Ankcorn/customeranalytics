import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Table, Filters, User } from './components' 
import { FilterHeader } from './components/filters'
import { TableRowStyle } from './components/tablerow';
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
          <FilterHeader>Filters</FilterHeader>
        </Filters>
        <Table className="table">
          {Array(20).fill(null).map(element=><TableRowStyle />)}
        </Table>
        </div>
      </div>
    );
  }
}

export default App;
