import React, { Component } from 'react';


export default class Product extends Component{
   
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);

    }
    handleClick(e){
        console.log(this.props.item);
        this.props.remove(this.props.item,e);
    }

    render(){
        return(
            <div>
                <li className="Product">
                    <span>{this.props.item.name}</span>
                    <span>{this.props.item.quantity}</span>
                    <button onClick={this.handleClick}> Delete</button>
                </li>
            </div>
        );
    }

}
