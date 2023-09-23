function FunctionPropsMethod(property){
      
    return <div>
         <h1>product Name is:{property.productName}</h1>
         <h1>product Name is:{property.model}</h1>

        <p>
            this is a paragraph
        </p>
    </div>
}
FunctionPropsMethod.defaultProps = {
   productName: 'red',
   model: 2023
}
export default FunctionPropsMethod;