import React from 'react';
import {Link} from 'react-router-dom';

var isRegistered = false;

function Title() {
    return(
        <div class="row">
            <div class="col-lg-6">
            <h1 class="big-heading">Meet new and interesting dogs nearby.</h1>
            {isRegistered ? <Link to="/auth/login" type="button" className="btn btn-outline-light btn-lg download-button">Sign In</Link> : <Link to="/auth/register" type="button" className="btn btn-dark btn-lg download-button">Sign Up</Link>}
            </div>

            <div class="col-lg-6">
            <img class="title-image" src={require("../images/iphone6.png")} alt="iphone-mockup"/>
            </div>
        </div>    
    )
}

export default Title;
