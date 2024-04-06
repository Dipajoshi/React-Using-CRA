import React, { Component } from 'react';
import "./Product.css";

export default class Product extends Component{
   
    constructor(props){
        super(props);
        // this.handleClick=this.state.handleClick.bind(this);

    }
    handleClick(e){

    }

    render(){
        return(
            <div>
                <li className="Product">
                    <spam>{this.props.item}</spam>
                    <button onclick={this.handleClick}> Delete</button>
                </li>
            </div>
        );
    }

}
