import React, { Component } from 'react';


class Shoppingcart extends Component{
   
    
constructor(props){
    super(props);
    this.state={items:this.props.items, total:this.props.items.length};
    setTimeout(this.updateCart, 5000, "Dell-Inspiron");
}
updateCart=(item)=>{
   
   let newItems=[...this.state.items, item];
   let newTotal =newItems.length;
   this.setState({items:newItems, total:newTotal});
   
}
render(){
    return(
        <div>
        
        <h2>Your Cart Details</h2>
        <h2>Product details:{this.state.items.join(',')}</h2>
        <h2>Product Counting:{this.state.total}</h2>
        </div>
    );
}

}


export default Shoppingcart;