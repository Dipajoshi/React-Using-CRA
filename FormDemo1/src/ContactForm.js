import React, { Component } from 'react';

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state={username:""};
        this.handleChange=this.handleChange.bind(this);
        
    }
    handleChange(e){
        this.setState({username:e.target.value});
        }

    render(){
       return(
       <div>
        <h2>Contact form</h2>
        <form>
            <label htmlFor="usrname" >Name</label>
            <input type="text" id="usrname"
             value={this.state.username}
              onChange={this.handleChange}>
                </input>
         
            
        </form>
        <p>You typed:{this.state.username}</p>
        </div>
        ) ;
    }
}
export default ContactForm;