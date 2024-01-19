import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
export default function ProfilePage() {
    return (
        < >
            <div className="light-bg home-bg">
                
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to="/"> <span className="h1">
                            <i className="fa fa-angle-left color-dark"></i>
                        </span>
                            <h5 className="text-white text-center mx-auto"><b>My Profile</b></h5>
                        </Link>

                    </div>
                </nav>
                <div className="container">
                    <div className="modal fade" id="profileModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'contents !important' }}>
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content rounded-modal shadow p-3 border-0" style={{ marginTop: '6rem' }}>
                                <img src="images/user.png" id="profileImage" className="user-profile shadow mx-auto img-fluid rounded-circle mt-n5 mb-1 animated wow pulse" alt="User Profile" />
                                <input id="imageUpload" type="file" name="profile_photo" placeholder="Photo" required="" capture />
                                <h4 className="color-dark text-right mt-n4 animated wow fadeInUp">25,600</h4>
                                <h5 className="color-light text-center animated wow fadeInDown delay-0-3s">Henna Leo</h5>
                                <h6 className="color-light text-center animated wow fadeInDown delay-0-4s">henna4@gmail.com</h6>
                                <div className="modal-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group input-group w-100 animated wow fadeInDown delay-0-1s">
                                                    <div className="input-group-prepend">
                                                        <span><img src="images/left-icon.png" alt="Left Icon" /></span>
                                                    </div>
                                                    <input type="text" className="form-control textfield-rounded shadow-sm mb-4 ml-n3" id="recipient-user" placeholder="Username" />
                                                </div>
                                            </div>
                                            {/* ... Repeat similar structure for other form elements */}
                                        </div>
                                        <center><button type="button" className="gradientBtn w-50 animated wow fadeInUp">Save</button></center>
                                    </form>
                                </div>

                                <div className="modal-footer border-0 mt-n4">
                                    <center>
                                        <p className="text-center mt-3 animated wow fadeInUp">
                                            <a href="profile.html" data-toggle="modal" data-target="#passModal" data-whatever="" className="color-blue">Change Password</a>
                                        </p>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer></Footer>
            </div>

        </>
    )
}
