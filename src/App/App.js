import React, { Component } from "react";
import Container from "../Container/Container";
import OrderForm from "../OrderForm/OrderForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/purchases")
      .then(response => response.json())
      .then(orders => this.setState({ orders }))
      .catch(err => console.log(err));
  }

  addItem = (newItem) => {
    this.setState({orders: [...this.state.orders, newItem]})
    // let options = {
    //   method: "POST",
    //   body: JSON.stringify(newItem),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // };

    // fetch("http://localhost:3001/api/v1/purchases", options)
    //   .then(response => response.json())
    //   .then(orders => this.setState({ orders }))
    //   .catch(err => console.log(err));
  };

  deleteItem = (id) => {
    const filteredItems = this.state.orders.filter(item => item.id !== id)
    this.setState({filteredItems})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="app-title">My Order History</h1>
          <div className="purchase-form">
            <OrderForm addItem={this.addItem} />
          </div>
        </header>
        <div className="purchase-container">
          <Container orders={this.state.orders} deleteItem={this.deleteItem}/>
        </div>
      </div>
    );
  }
}

export default App;
