import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function ReadUsers() {
    
    //Hook - useState()
    //var [variable name, function name to change the value of this variable] = useState(initial value);
    const [APIData, changeAPIData] = useState([]);

    //Hook - useEffect()
    useEffect(() => {

        //axios is a adavanced React Library for performing API calls
        //axios is similar to fetch() method in JS
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((r) => {
                console.log(r);
                changeAPIData(r.data);//Assign the API response to the variable
            })
            .catch((response) => console.log("Error:" + response.data))
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;//{id: "99", firstName: "Arun", lastName: "KUmar", checkbox: true}
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)

        console.log(localStorage.getItem("First Name"));

        // sessionStorage.setItem('ID 1', id);
        // sessionStorage.setItem('First Name 1', firstName);
        // sessionStorage.setItem('Last Name 1', lastName);
        // sessionStorage.setItem('Checkbox Value 1', checkbox)

        // console.log(sessionStorage.getItem("First Name 1"));
    }

    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                changeAPIData(response.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }

    return <>
    <table border={1} >            
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checkbox Value</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
        {APIData.map((d) => {
            return (
                <tr>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.checkbox}</td>
                    <td>
                        <Link to='/UpdateUser'>
                            <Button onClick={() => setData(d)}>Update</Button>
                        </Link>
                    </td>
                    <td>
                        <Button onClick={() => onDelete(d.id)}>Delete</Button>
                    </td>
                </tr>
            )
        })}            
    </table>
</>
}