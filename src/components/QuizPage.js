import React from 'react'
import { Link } from 'react-router-dom'

export default function QuizPage() {
  return (
      <div className='light-bg'>
          <nav className='navbar navbar-expand-lg'>
              <div className="container">
                  <Link to="/category" className="h1"><i className="fa fa-angle-left color-dark"></i></Link>
              </div>
          </nav>
          <div className="container">
              <div className="row">
                  <br />
                  <br />
                  <div className="col-sm-12 col-sm-offset-2" id="quiz_web">
                      <div className="progress mb-2">
                          <div
                              className="progress-bar bg-blue"
                              role="progressbar"
                              style={{ width: "1%" }}
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={100}
                          />
                      </div>
                      {/*  timer  */}
                      <center>
                          <div id="app" className="animated wow pulse" />
                      </center>
                      <center>
                          <div className="loader">
                              <div
                                  className="spinner-border mt-5"
                                  role="status"
                                  id="loadbar"
                                  style={{ display: "none" }}
                              >
                                  <span className="sr-only">Loading...</span>
                              </div>
                          </div>
                      </center>
                      <div id="quiz" className="quiz">
                          <div className="question mb-3 animated wow zoomIn">
                              <h3>
                                  <span className="label label-warning" id="qid">
                                      1.
                                  </span>
                                  <span id="question"> National game of India?</span>
                              </h3>
                          </div>
                          <ul className="row">
                              <li className="animated wow fadeInUp delay-0-1s">
                                  <input
                                      type="radio"
                                      id="f-option"
                                      name="selector"
                                      defaultValue={1}
                                  />
                                  <label
                                      htmlFor="f-option"
                                      className="align-middle  element-animation"
                                  >
                                      Cricket
                                  </label>
                                  <div className="check" />
                              </li>
                              <li className="animated wow fadeInUp delay-0-2s">
                                  <input
                                      type="radio"
                                      id="s-option"
                                      name="selector"
                                      defaultValue={2}
                                  />
                                  <label htmlFor="s-option" className="element-animation">
                                      Hockey
                                  </label>
                                  <div className="check">
                                      <div className="inside" />
                                  </div>
                              </li>
                              <li className="animated wow fadeInUp delay-0-3s">
                                  <input
                                      type="radio"
                                      id="t-option"
                                      name="selector"
                                      defaultValue={3}
                                  />
                                  <label htmlFor="t-option" className="element-animation">
                                      Football
                                  </label>
                                  <div className="check">
                                      <div className="inside" />
                                  </div>
                              </li>
                              <li className="animated wow fadeInUp delay-0-4s">
                                  <input
                                      type="radio"
                                      id="x-option"
                                      name="selector"
                                      defaultValue={4}
                                  />
                                  <label htmlFor="x-option" className="element-animation">
                                      Kabaddi
                                  </label>
                                  <div className="check">
                                      <div className="inside" />
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  )
}
