import React, { Component } from 'react';

export default class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={itemName:"", quantity:""}
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);


    }
    handleClick(e){
        e.preventDefault();
        let item={name:this.state.itemName, quantity:Number(this.state.quantity)}
        this.props.add(item, e);
        
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})    
           
    }

    render(){

        return(
            <div>
                <h1>Add New Product</h1>
                <form>
                    <label htmlFor='itemName'>Item Name</label>
                    <input type='text' id="itemName" value={this.state.itemName} name="itemName" onChange={this.handleChange}></input>
                    <br></br>
                    <label htmlFor='quantity'>Quantity</label>
                    <input type='number' id="quantity" min="1" max="10" value={this.state.quantity} name="quantity" onChange={this.handleChange}></input>
                    <br></br>
                    <button onClick={this.handleClick}>Add to cart</button>
                    
                </form>
            </div>
        )
    }

}