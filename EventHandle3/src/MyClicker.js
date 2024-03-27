import React, { Component } from 'react';
import "./MyClicker.css"

class MyClicker extends Component{
    constructor(props){
        super(props)
        this.state={num:1}
    }

    getRandom=()=>{
        this.randomNum=Math.floor(Math.random() * 10) + 1
        
        this.setState({num:this.randomNum});


    }

    render(){
        return(
            <div className='center'>
                <h2>Counter is {this.state.num}</h2>
                {this.state.num === 6 ? <p> Congratulations!🥳🥳 You Won.</p> : <div> <button onClick={this.getRandom}>  <p>Generate new number</p> </button> <p className="note">Counter should be 6 to win</p></div>}
            </div>

        );
    }

}
export default MyClicker;