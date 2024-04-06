import React, { Component } from 'react';
import Product from "./Product";
import "./Product.css";

export default class ProductList extends Component{
    constructor(props){
        super(props);
        this.state={items:this.props.items}
        this.deleteItem=this.deleteItem.bind(this);
    }
    deleteItem(itemName, e){

    }

   render(){
        let list=this.state.items.map((x)=> <Product item={x}/>);
    return(
        <div>
          <h1>Available Products</h1>

        <hr></hr>
        <div>
            <ul>
                {list}
            </ul>
        </div>

        </div>
    );
   }


}