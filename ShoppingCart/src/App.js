import React, { Component } from 'react';
import ShoppingCart from "./ShoppingCart";
class App extends Component{
  render(){

    let items=["iphone","laptop","mobile","earphone","watch"];

    return(<div>
      <ShoppingCart listitems={items}/>
    </div>);
  }
}

export default App;