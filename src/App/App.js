import React, { Component } from 'react';
import Container from '../Container/Container'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      orders: []
    }
  }

  componentDidMount() {
    this.setState({isLoading: true})
    fetch('http://localhost:3001/api/v1/purchases')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(orders => this.setState({orders}))
    console.log(this.state.orders)
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>

          </div>
        </header>
        <div className='purchase-container'>
          <Container orders={this.state.orders} />
        </div>
      </div>
    );
  }
}

export default App;
