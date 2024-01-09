/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Link} from 'react-router-dom'

const IndexDescription = () => {
    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                    <h1 className="color-blue mt-5 animated fadeInDown delay-1s">Quiz</h1>
                    <p className="animated fadeInDown delay-2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptates rerum eveniet sapiente repellat esse, doloremque quod recusandae deleniti nostrum assumenda vel beatae sed aut modi nesciunt porro quisquam voluptatem.</p>
                    <Link to="/category"><button className="gradientBtn animated fadeInUp delay-3s">Play Quiz</button></Link>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                    <img src="images/right-img.png" alt="Right Image" className="img-fluid animated pulse slow infinite" />
                </div>
            </div>
            <div className="float-left ml-5">
                <img src="images/bottom-img.png" alt="Bottom Image" className="img-fluid animated swing slower infinite" />
            </div>
        </div>
    );
};

export default IndexDescription;