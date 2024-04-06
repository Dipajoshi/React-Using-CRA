import React, { Component } from 'react';
import ProductList from "./ProductList";
class App extends Component{
  render(){

    

    return(<div>
      <ProductList items={["JBL Earphone", "Samgsung Mobile", "Dell Laptop", "Iphone Charger"]}/>
    </div>);
  }
}

export default App;