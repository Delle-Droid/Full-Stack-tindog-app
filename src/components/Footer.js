import React from 'react';

function Footer() {

    const date = new Date().getFullYear();

    return(
        <footer id="footer">
         <a href="http://twitter.com"><i className="iconic fab fa-twitter"></i></a>   
          <a href="http://www.facebook.com" className="facebook"><i className="iconic fab fa-facebook-f"></i></a>  
           <a href="http://instagram.com" className="insta"><i className="iconic fab fa-instagram"></i></a> 
            <a href="http://gmail.com" className="mail"><i className="iconic fas fa-envelope"></i></a>
            <p className="copyright">© Copyright {date} TinDog</p>

        </footer>
    )
}

export default Footer;