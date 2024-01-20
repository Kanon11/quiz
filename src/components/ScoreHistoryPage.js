/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

export default function ScoreHistoryPage() {
  return (
      <div className='light-bg home-bg'>
          {/* Navigation */}
          <nav className="navbar navbar-expand-lg">
              <div className="container">
                  <Link to="/" className="h1">
                      <i className="fa fa-angle-left color-dark" />
                  </Link>
                  <h5 className="text-white text-center mx-auto">
                      <b>Score History</b>
                  </h5>
              </div>
          </nav>
          {/* Page Content */}
          <div className="container mt-4 leaderboard table-responsive">
              <table className="table">
                  <tbody>
                      <tr className="shadow bg-white animated wow fadeInDown delay-0-3s">
                          <td>
                              <img
                                  src="images/category/sports.png"
                                  className="rounded-circle ranker-profile"
                              />
                          </td>
                          <td>
                              <h5 className="text-dark text-left">Sports &amp; Games</h5>
                          </td>
                          <td className="col-sm-1 pl-5">
                              <span className="diamond bg-green">
                                  <h6 className="text-center text-white">6 </h6>
                              </span>
                          </td>
                          <td className="col-sm-2 text-left">
                              <span className="color-light"> True Answer</span>
                          </td>
                          <td className="col-sm-1 pl-5">
                              <span className="diamond bg-red">
                                  <h6 className="text-center text-white">4 </h6>
                              </span>
                          </td>
                          <td className="col-sm-2 text-left">
                              <span className="color-light rotate-45 b-4"> False Answer</span>
                          </td>
                          <td className="score-bg">
                              <h5 className="color-purple color-purple">
                                  <b>10,000</b>
                              </h5>
                          </td>
                      </tr>
                      <tr className="shadow bg-white animated wow fadeInDown delay-0-4s">
                          <td>
                              <img
                                  src="images/category/music.png"
                                  className="rounded-circle ranker-profile"
                              />
                          </td>
                          <td>
                              <h5 className="text-dark text-left">Music</h5>
                          </td>
                          <td className="col-sm-1 pl-5">
                              <span className="diamond bg-green">
                                  <h6 className="text-center text-white">8 </h6>
                              </span>
                          </td>
                          <td className="col-sm-2 text-left">
                              <span className="color-light"> True Answer</span>
                          </td>
                          <td className="col-sm-1 pl-5">
                              <span className="diamond bg-red">
                                  <h6 className="text-center text-white">2 </h6>
                              </span>
                          </td>
                          <td className="col-sm-2 text-left">
                              <span className="color-light rotate-45 b-4"> False Answer</span>
                          </td>
                          <td className="score-bg">
                              <h5 className="color-purple color-purple">
                                  <b>1700</b>
                              </h5>
                          </td>
                      </tr>
                      <tr className="shadow bg-white animated wow fadeInDown delay-0-5s">
                          <td>
                              <img
                                  src="images/category/agriculture.png"
                                  className="rounded-circle ranker-profile"
                              />
                          </td>
                          <td>
                              <h5 className="text-dark text-left">Agriculture</h5>
                          </td>
                          <td className="col-sm-1 pl-5">
                              <span className="diamond bg-green">
                                  <h6 className="text-center text-white">4 </h6>
                              </span>
                          </td>
                          <td className="col-sm-2 text-left">
                              <span className="color-light"> True Answer</span>
                          </td>
                          <td className="col-sm-1 pl-5">
                              <span className="diamond bg-red">
                                  <h6 className="text-center text-white">4 </h6>
                              </span>
                          </td>
                          <td className="col-sm-2 text-left">
                              <span className="color-light rotate-45 b-4"> False Answer</span>
                          </td>
                          <td className="score-bg">
                              <h5 className="color-purple color-purple">
                                  <b>11,000</b>
                              </h5>
                          </td>
                      </tr>
                      <tr className="shadow bg-white animated wow fadeInDown delay-0-6s">
                          <td>
                              <img
                                  src="images/category/history.png"
                                  className="rounded-circle ranker-profile"
                              />
                          </td>
                          <td>
                              <h5 className="text-dark text-left">History</h5>
                          </td>
                          <td className="col-sm-1 pl-5">
                              <span className="diamond bg-green">
                                  <h6 className="text-center text-white">4 </h6>
                              </span>
                          </td>
                          <td className="col-sm-2 text-left">
                              <span className="color-light"> True Answer</span>
                          </td>
                          <td className="col-sm-1 pl-5">
                              <span className="diamond bg-red">
                                  <h6 className="text-center text-white">4 </h6>
                              </span>
                          </td>
                          <td className="col-sm-2 text-left">
                              <span className="color-light rotate-45 b-4"> False Answer</span>
                          </td>
                          <td className="score-bg">
                              <h5 className="color-purple color-purple">
                                  <b>9000</b>
                              </h5>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>

  )
}
