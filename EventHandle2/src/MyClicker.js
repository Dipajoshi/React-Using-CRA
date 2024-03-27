import React, { Component } from 'react';

class MyClicker extends Component{
    constructor(props){
        super(props)
        this.state={num:this.props.num}
        
    }

   handleClicker =() =>{
    console.log("hi");
    this.increment=this.state.num +1;
    this.setState({num:this.increment});

   }
   render(){
    return(
        <div>
            <h2>Counter is {this.state.num}</h2>
            <button onClick={this.handleClicker}>Increment Me</button>
        </div>
    );
   }
    
}


export default MyClicker;