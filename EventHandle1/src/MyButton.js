import React, { Component } from 'react';

class MyButton extends Component{

handleClick(){
    let currentDate = new Date();
    alert(currentDate);
}

    render(){
        return(
           <div>
            <button onClick={this.handleClick}> Click Here </button>
           </div>       
        );
    }

}
export default MyButton;