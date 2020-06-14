import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

function Navigation() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };


    return (
        <section id="title">
            <div className="container-fluid-nav">

                <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
                
                        <Link to="/" className="navbar-brand" onClick={scrollToTop}>tindog</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="#footer">Contact</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">Pricing</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#cta">Download</a>
                            </li>

                        </ul>
                    </div>
                </nav>

            </div>
        </section>

    )
}

export default Navigation;