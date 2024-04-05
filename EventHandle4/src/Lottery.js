import React, { Component } from 'react';
import Ball from "./Ball.js";
import "./Lottery.css";

export default class Lottery extends Component {
    static defaultProps = { title: "Lotto", numballs: 6, maxvalue: 50 };
    constructor(props) {
        super(props);
        this.state = { numsArray: Array.from({ length: this.props.numballs }) };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
       let randomNums=[];
       for(let i=0;i<this.props.numballs;i++) {
        let randomNum= Math.floor(Math.random()*this.props.maxvalue+1);
        randomNums.push(randomNum);
       }
    this.setState({numsArray:randomNums});
   
    }


    render() {

        let balls = this.state.numsArray.map((x) => {
            return (
                <Ball num={x} />
            );
        })
        return (

            <div className='Lottery'>
                <h1>{this.props.title}</h1>

                {balls}
                <button onClick={this.handleClick}>generate nums</button>
            </div>




        );
    }

}
