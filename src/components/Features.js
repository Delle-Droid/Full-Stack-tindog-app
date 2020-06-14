import React from 'react';

function Features() {
    return(
        <section id="features">

            <div className="row">

            <div className="feature-box col-lg-4">
                <i className="icon fas fa-check-circle fa-4x"></i>
                <h3>Easy to use.</h3>
                <p>So easy to use, even your dog could do it.</p>
            </div>
            <div className="feature-box col-lg-4">
                <i className="icon fas fa-bullseye fa-4x"></i>
                <h3>Elite Clientele</h3>
                <p>We have all the dogs, the greatest dogs.</p>
            </div>
            <div className="feature-box col-lg-4">
                <i className="icon fas fa-heart fa-4x"></i>
                <h3>Guaranteed to work.</h3>
                <p>Find the love of your dog's life or your money back.</p>
            </div>

            </div>

        </section>
    )
}

export default Features;