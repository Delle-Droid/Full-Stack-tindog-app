import React from 'react';
import '../App.css';
import Title from './Title'
import Features from './Features'
import Testimonials from './Testimonials';
import Press from './Press';
import Pricing from './Pricing';
import Cta from './Cta';
import Footer from './Footer';

function Home() {
    return(
        <div>
        <section id="title">
          <div className="container-fluid">
            <Title />
          </div>
        </section> 
        <Features />
        <Testimonials />
        <Press />
        <Pricing />
        <Cta />
        <Footer />     
        </div>
    )
}

export default Home;