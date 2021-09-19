import React from 'react';
import Navbar from '../navbar/navbar';


import './header.css';

function Header() {
  



  return (
    <div className="header">
        <div >
            <img className="header__logo" src="https://thumbs.dreamstime.com/b/food-blog-web-site-color-line-icon-cooking-video-streaming-online-recipes-sign-pictogram-page-mobile-app-promo-ui-ux-gui-174299418.jpg" alt="logo"></img>
        </div>
        <div className="header_nav">
            <Navbar/>
        </div>
      

    </div>
  );
}

export default Header;