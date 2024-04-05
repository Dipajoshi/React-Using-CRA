import React, { Component } from 'react';
import "./Cart";

export default class Cart extends Component {
   
    
    render() {
        return (
            <div className='Cart'>
                <li>
                <p>{this.props.name}</p>
                <button onClick={this.props.deleteItem} name={this.props.name}>Delete</button>
                </li>
            </div>
        )
    }

}