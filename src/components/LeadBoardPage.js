/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

export default function LeadBoardPage() {
    return (
        <div className="light-bg home-bg" >
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="h1">
                        <i className="fa fa-angle-left color-dark" />
                    </Link>
                    <h5 className="text-white text-center mx-auto">
                        <b>Leaderboard</b>
                    </h5>
                </div>
            </nav>
            {/* Page Content */}
            <div className="container mt-4 col-md-6">
                <div className="square mt-4">
                    <center>
                        <span className="rounded-circle bg-teal text-white badge position-relative z-Index-2 animated wow bounce delay-0-4s">
                            2
                        </span>
                        <span className="topperSquare zIndex-1 mb-4 animated wow zoomIn">
                            <span className="topperInner bg-purple">
                                <img
                                    src="images/leaderboard/teacher.png"
                                    className="rotate-45 rounded-circle"
                                />
                            </span>
                        </span>
                        <h6 className="color-dark text-center animated wow slideInUp">
                            John Levy
                        </h6>
                        <h5 className="color-blue text-center animated wow slideInUp">
                            <b>20,000</b>
                        </h5>
                    </center>
                </div>
                <div className="square">
                    <center>
                        <span className="rounded-circle bg-purple text-white badge position-relative z-Index-2 animated wow bounce delay-0-3s">
                            1
                        </span>
                        <span className="topperSquare mb-4 animated wow zoomIn">
                            <span className="topperInner bg-pink">
                                <img
                                    src="images/leaderboard/engineer.png"
                                    className="rotate-45 rounded-circle"
                                />
                            </span>
                        </span>
                        <h6 className="color-dark text-center animated wow slideInUp">
                            Selena Lovato
                        </h6>
                        <h5 className="color-blue text-center animated wow slideInUp">
                            <b>25,000</b>
                        </h5>
                    </center>
                </div>
                <div className="square mt-4">
                    <center>
                        <span className="rounded-circle bg-green text-white badge position-relative z-Index-2 animated wow bounce delay-0-5s">
                            3
                        </span>
                        <span className="topperSquare mb-4 animated wow zoomIn">
                            <span className="topperInner bg-orange">
                                <img
                                    src="images/leaderboard/business-man.png"
                                    className="rotate-45 rounded-circle"
                                />
                            </span>
                        </span>
                        <h6 className="color-dark text-center animated wow slideInUp">
                            Hank Wasson
                        </h6>
                        <h5 className="color-blue text-center animated wow slideInUp">
                            <b>14,000</b>
                        </h5>
                    </center>
                </div>
            </div>
            <div className="container">
                <div className="col-auto col-centered leaderboard table-responsive">
                    <table className="table">
                        <tbody>
                            <tr className="shadow bg-white animated wow fadeInDown delay-0-3s">
                                <th scope="row" className="color-blue">
                                    4
                                </th>
                                <td>
                                    <img
                                        src="images/leaderboard/developer.png"
                                        className="rounded-circle bg-green ranker-profile"
                                    />
                                </td>
                                <td>
                                    <h6 className="text-dark">Natasha Tizaal</h6>
                                </td>
                                <td>
                                    <h5 className="color-purple">
                                        <b>10,000</b>
                                    </h5>
                                </td>
                                <td>
                                    <img src="images/leaderboard/trophy.png" />
                                </td>
                            </tr>
                            <tr className="shadow bg-white animated wow fadeInDown delay-0-4s">
                                <th scope="row" className="color-blue">
                                    5
                                </th>
                                <td>
                                    <img
                                        src="images/leaderboard/developer.png"
                                        className="rounded-circle bg-teal ranker-profile"
                                    />
                                </td>
                                <td>
                                    <h6 className="text-dark">Jissy Simonec</h6>
                                </td>
                                <td>
                                    <h5 className="color-purple">
                                        <b>8,000</b>
                                    </h5>
                                </td>
                                <td>
                                    <img src="images/leaderboard/trophy.png" />
                                </td>
                            </tr>
                            <tr className="shadow bg-white animated wow fadeInDown delay-0-5s">
                                <th scope="row" className="color-blue">
                                    6
                                </th>
                                <td>
                                    <img
                                        src="images/leaderboard/developer.png"
                                        className="rounded-circle bg-purple ranker-profile"
                                    />
                                </td>
                                <td>
                                    <h6 className="text-dark">Demi Lopez</h6>
                                </td>
                                <td>
                                    <h5 className="color-purple">
                                        <b>5,000</b>
                                    </h5>
                                </td>
                                <td>
                                    <img src="images/leaderboard/trophy.png" />
                                </td>
                            </tr>
                            <tr className="shadow bg-white animated wow fadeInDown delay-0-6s">
                                <th scope="row" className="color-blue">
                                    7
                                </th>
                                <td>
                                    <img
                                        src="images/leaderboard/developer.png"
                                        className="rounded-circle bg-orange ranker-profile"
                                    />
                                </td>
                                <td>
                                    <h6 className="text-dark">Ariana Swift</h6>
                                </td>
                                <td>
                                    <h5 className="color-purple">
                                        <b>4,000</b>
                                    </h5>
                                </td>
                                <td>
                                    <img src="images/leaderboard/trophy.png" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
