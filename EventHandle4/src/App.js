import React, { Component } from 'react';
import Lottery from "./Lottery";
class App extends Component{
  render(){
    return(<div>
      <Lottery title="Lotto"  numballs={ 5} maxvalue= {10}/>
     
    </div>);
  }
}

export default App;