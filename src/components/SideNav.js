/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const SideNav = () => {
    const closeNav = () => {
        document.getElementById("mySidenav").style.cssText = "width:0; border:none; box-shadow: none;";
    };

    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
            <a href="profile.html" className=""><img src="images/user.png" className="user-profile shadow img-fluid rounded-circle ml-3" alt="User Profile" /></a>
            <a href="index.html" className="text-white text-left"><small><p>henna4@gmail.com</p></small></a>
            <a href="category.html"><i className="fa fa-th-large text-white mr-3"></i>Category</a>
            <a href="category.html"><i className="fa fa-question text-white mr-3"></i>Play Quiz</a>
            <a href="quiz.html"><i className="fa fa-random text-white mr-3"></i>Random Quiz</a>
            <a href="leaderboard.html"><i className="fa fa-users text-white mr-3"></i>Leaderboard</a>
            <a href="score-history.html"><i className="fa fa-history text-white mr-3"></i>Score History</a>
            <a href="profile.html"><i className="fa fa-user-o text-white mr-3"></i>My Profile</a>
            <a href="index.html"><i className="fa fa-power-off text-white mr-3"></i>Logout</a>
        </div>
    );
};

export default SideNav;