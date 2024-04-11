import React, { Component } from 'react';
import MyInput from "./MyInput"
 export default class ContactFrom extends Component{
    constructor(props){
        super(props);
        this.xRef=React.createRef();
        this.handleClick=this.handleClick.bind(this);
        
    }
    handleClick(e){
       if(this.xRef.current.isEmpty()){
        alert("You do not typed any text so cannot submit")
    }
    else{
           this.xRef.current.selectText();
       
       }

    }


    render(){
       
        return(
            <div>
           <MyInput  ref={this.xRef}/>
           <button onClick={this.handleClick}>Mybutton</button>
           </div>
        )
    }
}