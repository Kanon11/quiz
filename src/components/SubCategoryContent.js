/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React from 'react'

 function SubCategoryContent() {
  return (
      <div className="modal fade mt-5" id="subCateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog mt-5" role="document">
              <div className="modal-content rounded-modal shadow p-3" style={{ marginTop: "4rem" }}>
                  <center>
                      <span className="loginSquare mt-n5"><p className="text-white" id="exampleModalLabel">Sports</p></span>
                  </center>
                  <div className="modal-header border-0 p-0">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">
                      <a href="quiz.html">
                          <div className="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/cricket.png"  className="img-fluid rounded-circle circle-shadow"/>
                                  <h5 className="text-dark mt-2">Cricket</h5>
                              </center>
                          </div>
                      </a>
                      <a href="quiz.html">
                          <div className="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/badminton.png"  className="img-fluid rounded-circle circle-shadow"/>
                                  <h5 className="text-dark mt-2">Badminton</h5>
                              </center>
                          </div>
                      </a>
                      <a href="quiz.html">
                          <div className="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/football.png"  className="img-fluid rounded-circle circle-shadow"/>
                                  <h5 className="text-dark mt-2">Football</h5>
                              </center>
                          </div>
                      </a>
                      <a href="quiz.html">
                          <div className="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/hockey.png"  className="img-fluid rounded-circle circle-shadow"/>
                                  <h5 className="text-dark mt-2">Hockey</h5>
                              </center>
                          </div>
                      </a>

                      <a href="quiz.html">
                          <div className="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/tennis.png"  className="img-fluid rounded-circle circle-shadow"/>
                                  <h5 className="text-dark mt-2">Tennis</h5>
                              </center>
                          </div>
                      </a>
                      <a href="quiz.html">
                          <div className="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/sports.png"  className="img-fluid rounded-circle circle-shadow"/>
                                  <h5 className="text-dark mt-2">Soccer</h5>
                              </center>
                          </div>
                      </a>

                  </div>
              </div>
          </div>
      </div>
  )
}
export default SubCategoryContent