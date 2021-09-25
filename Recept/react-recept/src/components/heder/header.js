import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';


import './header.css';

function Header() {
  



  return (
    
    <div className="header">
        <div className="header__logo">
            <Link to={{pathname:"/",fromDashboard:false}}>
               <img  src="https://thumbs.dreamstime.com/b/food-blog-web-site-color-line-icon-cooking-video-streaming-online-recipes-sign-pictogram-page-mobile-app-promo-ui-ux-gui-174299418.jpg" alt="logo"></img>
            </Link>
        </div>
        <div className="header_nav">
            <Navbar/>
        </div>
      

    </div>
    
  );
}

export default Header;