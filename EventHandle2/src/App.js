import React, { Component } from 'react';

import MyClicker from './MyClicker';
class App extends Component{
  render(){
    return(<div>
      <MyClicker num={1}/>
    </div>);
  }
}

export default App;