import React, { Component } from 'react';
import Shoppingcart from "./Shoppingcart";
class App extends Component{
  render(){
    return(<div>

      <Shoppingcart items={["One-Plus Mobile", "Fast Track Watch"]}/>
    </div>);
  }
}

export default App;