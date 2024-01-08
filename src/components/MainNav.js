/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const MainNav = () => {
    const openNav = () => {
        document.getElementById("mySidenav").style.cssText = "width:270px; border-right: 10px solid #fff; box-shadow: 1px 8px 8px 8px rgba(73,21,155,0.3); -webkit-box-shadow: 1px 8px 8px 8px rgba(73,21,155,0.3);  -moz-box-shadow: 1px 8px 8px 8px rgba(73,21,155,0.3);";
        var element = document.getElementById("mySidenav");
        element.classList.add("animated wow bounceInLeft slow");

    };
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <span className="menu" onClick={openNav}><img src="images/menu.png" /></span>
                <a className="zIndex-1 ml-n5 mr-5" href="index.html#"><img src="images/logo.png" className="d-none d-sm-none d-md-block ml-n5 mr-5" /></a>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link text-white cursor-pointer" data-toggle="modal" data-target="#loginModal" data-whatever="">Login</a>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link color-blue" href="#">|</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white cursor-pointer" data-toggle="modal" data-target="#signUpModal" data-whatever="">SignUP</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MainNav
