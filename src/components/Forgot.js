import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Forgot() {

    const[newUser, setNewUser] = useState({
        email: "",
        password: ""
    });

    function handleUser(event) {
        const{ name, value } = event.target;

        setNewUser(prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const login = {
            email: newUser.email,
            password: newUser.password
        }

        console.log(login);
    }

    return(
        <div className="loginDiv">
            <form className="form-signin">
                <div className="form-group">
                    <label>Owner's Email</label>
                    <input placeholder="Enter Owner's email address" name="email" onChange={handleUser} value={newUser.email} type="email" className="form-control top"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input placeholder="Enter password" name="password" onChange={handleUser} value={newUser.password} type="password" className="form-control bottom"/>
                </div>
            
                <Link to="/login" type="submit" onSubmit={handleSubmit} className="btn btn-dark loginBtn">Create new password</Link>
            </form>
        </div>
    )
}

export default Forgot;