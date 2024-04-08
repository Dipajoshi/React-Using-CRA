import React, { Component } from 'react';

 export default class ContactFrom extends Component{
    constructor(props){
        super(props);
        this.nameRef=React.createRef();
        this.emailRef=React.createRef();
        this.pwdRef=React.createRef();

    }
    handleSubmit =(e)=>{
        console.log("dipa");
        e.preventDefault();
        alert(`You typed: ${this.nameRef.current.value},${this.emailRef.current.value}
         and ${this.pwdRef.current.value}`)
    }


    render(){
        return(
            
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" ref={this.nameRef} ></input>
                    <br></br>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id="email" ref={this.emailRef}></input>
                    <br></br>
                    <label htmlFor='pwd'>Password</label>
                    <input type="password" id="pwd" ref={this.pwdRef}></input>
                    <br></br>
                    <button>Submit</button>
                </form>
           
        )
    }
}