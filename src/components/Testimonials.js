import React from 'react';

function Testimonials() {

    return(
        <section id="testimonials">

            <div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof. </h2>
                        <img className="testimonial-img" src={require("../images/dog-img.jpg")} alt="dog-profile"/>
                        <em>Pebbles, New York</em>
                    </div>
                    <div className="carousel-item">
                        <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
                        <img className="testimonial-img" src={require("../images/lady-img.jpg")} alt="lady-profile"/>
                        <em>Beverly, Illinois</em>
                    </div>

                    
                    </div>
                    <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    </a>
            </div>  
                
        </section>
    )
}

export default Testimonials;