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
  }

  changeFilter = (param, value, money) => {
    console.log(param, value, money)

    if(param==='priority' && money){
      this.setState({
        data: this.state.data.map(el=> {
            return { ...el, score: net.run(el.model.input.bank_bal).interesting }
          }).filter(
            el=>value === 'Red' ? 
            Math.floor(el.score*100) > 66 : value === 'Orange' ? 
            Math.floor(el.score*100) > 33 && Math.floor(el.score*100) < 67 : 
            Math.floor(el.score*100) < 33)
      })
    } else if (money) {
      this.setState({
        data: this.state.data.map(el=> {
          return { ...el, score: net.run(el.model.input.bank_bal).interesting }
        })
      })
    } else {
      this.setState({
        data: enrichedData
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header className="header">
          <h1>Customer Analytics</h1>
          <User />
        </Header>
        <div className="content">
          <Filters >
            <FilterHeader>Filters</FilterHeader>
            <FilterOptions changeFilter={this.changeFilter}/>
          </Filters>
          <Table tabledata={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
