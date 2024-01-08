import React from 'react';

const LoginModal = () => {
    // Function to handle login
    const handleLogin = () => {
        // Logic for handling login
    };

    return (
        <div className="modal fade mt-5" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog mt-5" role="document">
                <div className="modal-content rounded-modal shadow p-3" style={{ marginTop: '4rem' }}>
                    <center>
                        <span className="loginSquare mt-n5"><p className="text-white" id="exampleModalLabel">Login</p></span>
                    </center>
                    <div className="modal-header border-0 p-0">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <center>
                                <div className="form-group input-group w-75 animated wow fadeInDown delay-0-1s">
                                    <input type="text" className="form-control textfield-rounded shadow-sm p-3 mb-3 zIndex-1" id="recipient-name" placeholder="Email" />
                                    <div className="input-group-append z-Index-2">
                                        <span><img src="images/right-icon.png" className="ml-n6" alt="Right Icon" /><i className="fa fa-envelope ml-n4-1 text-white"></i></span>
                                    </div>
                                </div>
                                <div className="form-group input-group w-75 animated wow fadeInDown delay-0-2s">
                                    <div className="input-group-prepend z-Index-2">
                                        <span><img src="images/left-icon.png" alt="Left Icon" /><i className="fa fa-key ml-n4-2 text-white"></i></span>
                                    </div>
                                    <input type="password" className="form-control textfield-rounded shadow-sm p-3 mb-4 zIndex-1" id="recipient-pass" placeholder="Password" />
                                </div>
                            </center>
                            <center>
                                <button type="button" className="gradientBtn w-75 animated wow fadeInDown delay-0-3s" onClick={handleLogin}>Login</button>
                                <p className="text-center color-blue mt-3 animated wow fadeInDown delay-0-3s">OR</p>
                            </center>
                        </form>
                    </div>
                    <div className="modal-footer border-0 mt-n4">
                        <center>
                            <button type="button" className="btn-lg social-login rounded-circle shadow mr-4 bg-white animated wow zoomIn delay-0-5s"><i className="fa fa-google google-icon"></i></button>
                            <button type="button" className="social-login rounded-circle shadow bg-white animated wow zoomIn delay-0-6s"><i className="fa fa-facebook fb-icon"></i></button>
                            <p className="text-center color-dark mt-3 animated wow fadeInUp delay-0-3s">Don't have an account? <a href="index.html" className="color-blue">Sign UP</a> </p>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
