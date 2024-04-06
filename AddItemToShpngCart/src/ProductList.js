import React, { Component } from 'react';
import Product from "./Product";
import AddItem from "./AddItem";


export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: this.props.items }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    deleteItem(item, e) {
        console.log("hi")
        let arr = [];
        for (let i = 0; i < this.state.items.length; i++) {
            if (item.name !== this.state.items[i].name) {
                arr.push(this.state.items[i])
            }
        }
        this.setState((previousState) => {
            return ({ items: arr });
            
        });
    }
    addItem(item, e) {
        if(item.name==="" || item.quantity<1){
            return;
        }

        
        let arr = [...this.state.items];
        
        for (let i = 0; i < this.state.items.length; i++) {
           
            if (item.name === this.state.items[i].name) {
               arr[i].quantity = item.quantity + this.state.items[i].quantity;
                this.setState({items:arr})
                   return;
                
            }
        }
        
        arr.push(item);
        this.setState({ items: arr });
       

    }

    render() {
        let list = this.state.items.map((x) => <Product item={x} remove={this.deleteItem} />);
        return (
            <div>
                <h1>Available Products</h1>

                <hr></hr>
                <div>
                    <ul>
                        {list}
                    </ul>
                </div>

                <div>
                    <AddItem add={this.addItem} />
                </div>
            </div>

        );
    }


}