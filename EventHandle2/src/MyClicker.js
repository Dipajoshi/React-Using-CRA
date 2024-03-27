import React, { Component } from 'react';
import "./MyClicker.css";

class MyClicker extends Component{
    constructor(props){
        super(props)
        this.state={num:this.props.num}
        
        
    }

   handleClicker =()=>{
    
    this.increment=this.state.num +1;
    this.setState({num:this.increment});

   }
   render(){
    return(
        <div className="center">
            <h2>Counter is {this.state.num}</h2>
            <button onClick={this.handleClicker}>Increment Me</button>
        </div>
    );
   }
    
}


export default MyClicker;