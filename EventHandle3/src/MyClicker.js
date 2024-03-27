import React, { Component } from 'react';

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
            <div>
                <h2>Counter is {this.state.num}</h2>
                <button onClick={this.getRandom}> {this.state.num === 6 ? <p>You win</p> : <p>Generate new number</p>}  </button>
            </div>

        );
    }

}
export default MyClicker;