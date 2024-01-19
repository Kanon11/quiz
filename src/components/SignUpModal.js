import React from 'react';

const SignUpModal = () => {
    // Function to handle sign up
    const handleSignUp = () => {
        // Logic for handling sign up
    };

    return (
        <div className="modal fade mt-5" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg mt-5" role="document">
                <div className="modal-content rounded-modal shadow p-3" style={{ marginTop: '4rem' }}>
                    <center>
                        <span className="loginSquare mt-n5"><p className="text-white" id="exampleModalLabel">SignUp</p></span>
                    </center>
                    <div className="modal-header border-0 p-0">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <center>
                                <div className="row">
                                    <div className="col-lg-6 form-group input-group w-75 animated wow fadeInDown delay-0-1s">
                                        <div className="input-group-prepend z-Index-2">
                                            <span>
                                                <img src="images/left-icon.png" />
                                                <i className="fa fa-user-o zIndex-2 ml-n4-2 text-white" />
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control textfield-rounded shadow-sm p-3 mb-4 zIndex-1"
                                            id="recipient-user"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="col-lg-6 form-group input-group w-75 animated wow fadeInDown delay-0-2s">
                                        <div className="input-group-prepend z-Index-2">
                                            <span>
                                                <img src="images/right-icon.png" className="rotate-180" />
                                                <i className="fa fa-envelope zIndex-2 ml-n4-2 text-white rotate-n0" />
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control textfield-rounded shadow-sm p-3 mb-4 zIndex-1"
                                            id="recipient-email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="col-lg-6 form-group input-group w-75 animated wow fadeInDown delay-0-3s">
                                        <div className="input-group-prepend z-Index-2">
                                            <span>
                                                <img src="images/right-icon.png" className="rotate-180" />
                                                <i className="fa fa-key rotate-n0 zIndex-2 ml-n4-2 text-white" />
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control textfield-rounded shadow-sm p-3 mb-4 zIndex-1"
                                            id="recipient-password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="col-lg-6 form-group input-group w-75 animated wow fadeInDown delay-0-4s">
                                        <div className="input-group-prepend z-Index-2">
                                            <span>
                                                <img src="images/left-icon.png" />
                                                <i className="fa fa-key zIndex-2 ml-n4-2 text-white" />
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control textfield-rounded shadow-sm p-3 mb-4 zIndex-1"
                                            id="recipient-password"
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                </div>
                            </center>
                            <center>
                                <button
                                    type="button"
                                    className="gradientBtn w-75 animated wow fadeInUp delay-0-5s"
                                >
                                    Sign UP
                                </button>
                                <center>
                                    <p className="text-center color-blue mt-3 animated wow fadeInUp delay-0-5s pb-5">
                                        OR
                                    </p>
                                    <div className="modal-footer border-0 mt-n5">
                                        <center>
                                            <button
                                                type="button"
                                                className="btn-lg social-login rounded-circle shadow mr-4 bg-white animated wow zoomIn delay-0-5s"
                                            >
                                                <i className="fa fa-google google-icon" />
                                            </button>
                                            <button
                                                type="button"
                                                className="social-login rounded-circle shadow bg-white animated wow zoomIn delay-0-6s"
                                            >
                                                <i className="fa fa-facebook fb-icon" />
                                            </button>
                                            <p className="text-center color-dark mt-3 animated wow fadeInUp delay-0-6s">
                                                Already have an account?{" "}
                                                <a
                                                    href="index.html"
                                                    data-dismiss="modal"
                                                    className="color-purple"
                                                    data-toggle="modal"
                                                    data-target="#loginModal"
                                                    data-whatever=""
                                                >
                                                    Login
                                                </a>{" "}
                                            </p>
                                        </center>
                                    </div>
                                </center>
                            </center>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
