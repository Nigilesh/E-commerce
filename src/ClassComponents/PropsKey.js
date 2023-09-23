import React from "react";

class PropsKey extends React.Component{

    constructor() {

        super();

    }
    
    render(){
        return <div>
             <h1>the product Name is:</h1> {this.props.productName}
        <h1>the product model is:</h1>     {this.props.model}
        <h1>the product price is:</h1>     {this.props.price}
        </div>
    }
}
    PropsKey.defaultProps = {
        productName:"Samsung1",
        price:"70000"
    }

export default PropsKey;