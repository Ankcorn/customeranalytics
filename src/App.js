import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Filters, User } from './components'
import FilterOptions, { FilterHeader } from './components/filters'
import Table from './components/tableComponents/table';

import data from './data/generate';
console.log(data);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="header">
          <h1>Customer Analytics</h1>
          <User />
        </Header>
        <div className="content">
          <Filters>
            <FilterHeader>Filters</FilterHeader>
            <FilterOptions />
          </Filters>
          <Table tabledata={Array(6).fill(null)} />
        </div>
      </div>
    );
  }
}

export default App;
