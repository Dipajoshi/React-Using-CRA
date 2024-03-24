import React, { Component } from 'react';

class Student1 extends Component{
    state = {name:"Deepa", roll:12}
    render(){
        return(
            <div>
               <h2>Name is :{this.state.name}</h2> 
               <h2>Roll is :{this.state.roll}</h2> 
            </div>
            
        );
    }

}
export default Student1;