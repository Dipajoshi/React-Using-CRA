import React, { Component } from 'react';
import dipa from "./dipa.jpg";
console.log(dipa);

class Myself extends Component { 
    render() {
        return (
            <div>
                <p>This is me.</p>
                <img src={dipa} alt="deepa" className="image"/>
               
            </div>
        );
    }   
}
export default Myself;

