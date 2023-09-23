import React from "react";

class ThisKey extends React.Component{

    constructor() {
        super();
        this.state={productName:'redmi' ,model:'Note 10',price:12000}
    }
    render() {
      return <div>
        <h1>the product Name is:</h1> {this.state.productName}
        <h1>the product model is:</h1> {this.state.model}
        <h1>the product price is:</h1> {this.state.price}
        <button onClick={()=>this.ChangeValue()}>click to change</button>
      </div>
    }

    componentWillMount()
    {
        alert("Component Will Mount Event is called");
    }

    componentDidMount()
    {
        //alert("Component Did Mount Event is called");
    }

    componentWillUpdate()
    {
        alert("Component Will Update Event is called");
    }

    componentDidUpdate()
    {
        //alert("Component Did Update Event is called");
    }

    shouldComponentUpdate()
    {
        return true;
    }

    ChangeValue() {

      this.setState(
        {
        productName:'realme',
        model:'C12',
        price:10000
        });
    }
}
export default ThisKey;