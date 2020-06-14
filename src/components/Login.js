import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';



function Login() {

    const history = useHistory();

    const[user, setUser] = useState({
        email: "",
        password: ""
    })

    async function handleSubmit(event) {
        event.preventDefault();
        const settings = {
            method: "POST",
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
            
        };
    
        try {
            const res = await fetch('http://localhost:5000/auth/login', settings);
           if(res.status === 200) {
            console.log(res);
            const token  = await res.json(); 
            console.log(token); 
            localStorage.setItem("tindog-token", token.token);
            history.push("/image");
           }
           
        } catch(e){
            return e;
        }
    
    
    } 

    function handleUser(event) {
        const{ name, value } = event.target;

        setUser(prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        })
    }


    return(
        <div className="loginDiv">
            <form className="form-signin">
                <div className="form-group">
                    <label>Owner's Email</label>
                    <input placeholder="Enter Owner's email address" name="email" onChange={handleUser} value={user.email} type="email" className="form-control top"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input placeholder="Enter password" name="password" onChange={handleUser} value={user.password} type="password" className="form-control bottom"/>
                </div>
            
                <div className="form-group">
                    <button onClick={handleSubmit} type="submit" className="btn btn-dark loginBtn">Sign in</button>
                </div>
                
                <Link to="/forgot/:id"><p className="forgotLink">Forgot password? Click here</p></Link>
            </form>
            
        </div>
    )
}

export default Login;