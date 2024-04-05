import React, { Component } from 'react';
import "./ShoppingCart.css";
import Cart from "./Cart";
export default class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {listitems: this.props.listitems};
        
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        let newitems = this.state.listitems.reduce((x) => {
            return (x!==e.name);

        });
        this.setState({ newitems });

    }
    render() {
        let items = this.state.listitems.map((x) => {
            return (
                <Cart name={x} deleteItem={this.handleDelete} />
            );
        })

        return (
            <div className='ShoppingCart'>
                <h1>Available Products</h1>
                <hr></hr>
                <ul>
                    {items}
                </ul>

            </div>
        )
    }

}
