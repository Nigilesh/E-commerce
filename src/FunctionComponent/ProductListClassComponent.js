

    function ProductListFunctionComponent(){
          
            var name=  [
                {
                    prodName: "Samsung",
                    "prodModel": "Galaxy M04",
                    "prodPrice": 10499,
                    "prodColor": "blue"
                },
                {
                    "prodName": "IPhone",
                    "prodModel": "Galaxy M53",
                    "prodPrice": 25999,
                    "prodColor": "black"
                },
                {
                    "prodName": "Redmi",
                    "prodModel": "9A",
                    "prodPrice": 6499,
                    "prodColor": "black"
                }
            ]
            return <div>
                {
                    name.map((element)=>(
                        <ul>
                            <li>{element.prodName}</li>
                            <li>{element.prodModel}</li>
                            <li>{element.prodPrice}</li>
                            <li>{element.prodColor}</li>
                        </ul>
                    ))
                }
        </div>
        }

 export default ProductListFunctionComponent;