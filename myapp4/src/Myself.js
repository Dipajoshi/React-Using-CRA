import React, { Component } from 'react';
import dipa from "./dipa.jpg";
import "./Myself.css";

class Myself extends Component { 
    render() {
        return (
            <div className="Myself">
                <h2>This is me.</h2>
                <img src={dipa} alt="deepa" className="image"/>
             
            </div>
            
            );
    }   
}
export default Myself;

