import { useState } from "react";

function FunctionThis()
{   
    var applyStyle ={color:'red'} 

    var productName='Iphone';
    var model='14 pro'; 
 
    let [mobile,changeproductName1]=useState({
        productName1: 'vivo',
        model1:'v25'
    });
 
    
    return <div >  
        <hr></hr>
        <h1 style={applyStyle}>Product Name is:{productName}</h1>
        <h1 style={{color:'pink'}}>Product Model is:{model}</h1>
         
       <h1> <p>it is {mobile.productName1} model for {mobile.model1}</p></h1>
        
        
        <button onClick={()=>changeproductName1({productName1:'redmi',model1:'Note 10 pro'})}>change value</button>
        <button onClick={()=>changeproductName1({productName1:'oppo',model1:'25'})}>change value</button>
        
        <hr></hr>
    </div>
}
export default FunctionThis;