import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Filters, User } from './components'
import FilterOptions, { FilterHeader } from './components/filters'
import Table from './components/tableComponents/table';
import net from './data/cust-rank';
import data from './data/generate';
const enrichedData = data.map(el=> {
  return { ...el, score: net.run(el.model.input).interesting }
});
console.table(enrichedData);

class App extends Component {
  state = {
    data: enrichedData,
    filterParam: '',
    filterValue: ''
  }

  changeFilter(param, value) {
    this.setState({
      filterParam: param,
      filterValue: value
    })
  }
  render() {
    return (
      <div className="App">
        <Header className="header">
          <h1>Customer Analytics</h1>
          <User />
        </Header>
        <div className="content">
          <Filters change={this.changeFilter}>
            <FilterHeader>Filters</FilterHeader>
            <FilterOptions />
          </Filters>
          <Table tabledata={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
