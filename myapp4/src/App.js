import React, { Component } from 'react';
import Myself from "./Myself";
import "./App.css";
class App extends Component{
  render(){
    return(
      <div> 
        <p>Hello</p>
        <Myself/>
        <h2>This is outside div</h2>
      </div>
    )
  }
  
}
export default App;
