import React from "react";

class MenuComponent extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Conculsion</li>
            </ul>
        </div>
    }
}
export default MenuComponent;