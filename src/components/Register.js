import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

export default function Register() {

    const history = useHistory();

    const[contact, setContact] = useState({
        dogName: "",
        breed: "",
        email: "",
        password: ""
    })

    function handleChange(event) {
        const{ name, value } = event.target;

        setContact(prevValue => {
            return {      
                ...prevValue,
                [name]: value
            } 
        });
    }


    function handleSubmit(event) {
        event.preventDefault();
        const register = {
            dogName: contact.dogName,
            breed: contact.breed,
            email: contact.email,
            password: contact.password
        }
        console.log(register)
        return fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        body: JSON.stringify(register),
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "auth-token"
        },
    })
    .then(res => res.json())
    .then(data => {
        if(data !== null && data !== undefined) {
            history.push("/auth/login")
        } else {
            history.go();
        }
        
        console.log(data)}); 

    }

    return (
        <div className="registerDiv">
            <form className="form-signin" onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <label>Dog Name</label>
                    <input placeholder="Enter your dog's name" onChange={handleChange} name="dogName" value={contact.dName} type="text" className="form-control top"/>
                </div>

                <div className="form-group">
                    <label>Breed</label>
                    <input placeholder="Dog's Breed" onChange={handleChange} name="breed" value={contact.breed} type="text" className="form-control middle"/>
                </div>

                <div className="form-group">
                    <label>Owner's Email address</label>
                    <input placeholder="Enter Owner's email address" onChange={handleChange} name="email" value={contact.email} type="email" className="form-control middle"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input placeholder="Enter password" onChange={handleChange} name="password" value={contact.password} type="password" className="form-control bottom"/>
                </div>
            
                <button type="submit" onClick={handleSubmit} className="btn btn-dark loginBtn">Sign up</button>
            </form>
        </div>
    )


}