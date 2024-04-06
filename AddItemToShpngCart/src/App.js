import React, { Component } from 'react';
import ProductList from "./ProductList";
class App extends Component{
  render(){

    

    return(<div>
      <ProductList items={[{name:"pen", quantity:5}, {name:"copy", quantity:2}, {name:"mobile", quantity:10},
      {name:"bag", quantity:3}, {name:"shoes", quantity:4}]}/>
    </div>);
  }
}

export default App;
