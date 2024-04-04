import React, { Component } from 'react';

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state={username:"",email:"",pwd:""  };
        this.handleChange1=this.handleChange1.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.handleChange3=this.handleChange3.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.value="";
        
    }
    handleChange1(e){
        
        this.setState({username:e.target.value});
        }
    handleChange2(e){
        
        this.setState({email:e.target.value});
        }
    handleChange3(e){
        
        this.setState({pwd:e.target.value});
        }
    handleSubmit(e){
        e.preventDefault();
        alert(`You typed: ${this.state.username} \n ${this.state.email} \n ${this.state.pwd}`)
        
        
    }

    render(){
       return(
       <div>
        <h2>Contact form</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="usrname" >Name</label>
            <input type="text" id="usrname"
             value={this.state.username}
              onChange={this.handleChange1}>
                </input>
                 {this.state.username}
                <br></br>

                <label htmlFor="emailid" >Email</label>
            <input type="email" id="emailid"
             value={this.state.email}
              onChange={this.handleChange2}>
                </input> {this.state.email}
                <br></br>

                <label htmlFor="password" >Password</label>
            <input type="password" id="password"
             value={this.state.pwd}
              onChange={this.handleChange3}>
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