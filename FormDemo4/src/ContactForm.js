import React, { Component } from 'react';

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state={username:"",email:"",pwd:""  };
        this.handleChange=this.handleChange.bind(this);
                
    }
    handleChange(e){
        
        this.setState({[e.target.name]:e.target.value});
        }
    
    handleSubmit(e){
        e.preventDefault();
        alert("You typed: \n" + this.state.username + "\n" + this.state.email + "\n" + this.state.pwd );
        
        
    }

    render(){
       return(
       <div>
        <h2>Contact form</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="usrname" >Name</label>
            <input type="text" 
            id="usrname"
            name="username"
             value={this.state.username}
              onChange={this.handleChange}>
                </input>
                 {this.state.username}
                <br></br>

                <label htmlFor="emailid" >Email</label>
            <input type="email"
             id="emailid"
             name="email"
             value={this.state.email}
              onChange={this.handleChange}>
                </input> {this.state.email}
                <br></br>

                <label htmlFor="password" >Password</label>
            <input type="password" 
            id="password"
            name="pwd"
             value={this.state.pwd}
              onChange={this.handleChange}>
                </input>
                {this.state.pwd}
                <br></br>
         
         <input type="submit"></input>
            
        </form>
       
       
        
        </div>
        ) ;
    }
}
export default ContactForm;