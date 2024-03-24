import React, { Component } from 'react';

class Student2 extends Component{
    
    constructor(){
        super()
        this.state = {name:"Deepuu", roll:13};

    }
    render(){
        return(
            <div>
               <h2>Name is :{this.state.name}</h2> 
               <h2>Roll is :{this.state.roll}</h2> 
            </div>
            
        );
    }

}
export default Student2;