import React, { Component } from 'react';

 export default class ContactFrom extends Component{
    constructor(props){
        super(props);
                this.inputRef=React.createRef();

    }

    isEmpty(){
        return(this.inputRef.current.value==="");
    }
    selectText(input){
        return this.inputRef.current.select();

    }
    


    render(){
       
        return(
            <input type="text" ref={this.inputRef} ></input>
           
        )
    }
}