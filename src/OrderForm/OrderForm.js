import React, { Component } from 'react'
import '../OrderForm/OrderForm.css'

class OrderForm extends Component {
    constructor() {
        super(); 
        this.state = {
            imageURL: "",
            name: "",
            description: "",
            price: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newItem  = {
            "id": Date.now(),
            "img": this.state.imageURL,
            "name": this.state.name,
            "description": this.state.description,
            "price": this.state.price
        }
        this.props.addItem(newItem)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
        imageURL: "",
        name: "",
        description: "",
        price: ""})
    }

    render() {
        return (
            <form className="OrderForm">
                <input
                type="text"
                placeholder="ImageURL:"
                name="imageURL"
                value={this.state.imageURL}
                onChange={this.handleChange}
                />

                <input
                type="text"
                placeholder="Name:"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                />

                <input
                type="text"
                placeholder="Description:"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                />

                <input
                type="text"
                placeholder="Price:"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
                />
                <button className="orderButton" onClick={event => this.handleSubmit(event)}>Add Purchase</button>
            </form>
        )
    }
}

export default OrderForm;
