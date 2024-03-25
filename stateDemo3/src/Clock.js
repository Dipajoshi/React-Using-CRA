import React, { Component } from 'react';
console.log(document);
class Clock extends Component{
   
 constructor(props){
    super(props);
    this.state={time:this.props.time};
    setInterval(this.updateTime, 1000);
}

updateTime=()=>{
    let newTime= new Date();
    this.setState({time:newTime});
    
 
}
render(){
    
    return(
        <div>
        <h2>Hello Guys.</h2>
        <h2>Current date and time is: {this.state.time.toLocaleString()}</h2>
         </div>
    );

}

}


export default Clock;