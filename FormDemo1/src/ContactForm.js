import React, { Component } from 'react';

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state={username:""};
        this.handleChange=this.state.handleChange.bind(this);
    }
    handleChange(){
        
    }

    render(){
       return(
       <div>
        <h2>Contact form</h2>
        <form>
            <label htmlFor="usrname" >Name</label>
            <input type="text" id="usrname"></input>

        </form>
        <p>You typed:{this.state.username}</p>
        </div>
        ) ;
    }
}
export default ContactForm;