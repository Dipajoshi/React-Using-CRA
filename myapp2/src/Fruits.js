import React, { Component } from 'react';
import foods from "./food";
import {choice, remove} from "./helper";
class Fruits extends Component{
    render(){
        let fruit=choice(foods);
        let remainingFoods = remove(foods, fruit);
        return(
            <div>
                <p>Total Fruits:{foods.length}</p>
                <p>They are:{foods.join(",")}</p>
                <p>The chosen fruit is:{fruit}</p>
                <p>The remaining fruit are:{remainingFoods.length}</p>
                <p>They are:{remainingFoods.join(",")}</p>

            </div>
        )
    }
}
export default Fruits;

