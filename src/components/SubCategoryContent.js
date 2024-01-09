/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React from 'react'

 function SubCategoryContent() {
  return (
      <div class="modal fade mt-5" id="subCateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog mt-5" role="document">
              <div class="modal-content rounded-modal shadow p-3" style="margin-top: 4rem;">
                  <center>
                      <span class="loginSquare mt-n5"><p class="text-white" id="exampleModalLabel">Sports</p></span>
                  </center>
                  <div class="modal-header border-0 p-0">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <a href="quiz.html">
                          <div class="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/cricket.png"  class="img-fluid rounded-circle circle-shadow"/>
                                  <h5 class="text-dark mt-2">Cricket</h5>
                              </center>
                          </div>
                      </a>
                      <a href="quiz.html">
                          <div class="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/badminton.png"  class="img-fluid rounded-circle circle-shadow"/>
                                  <h5 class="text-dark mt-2">Badminton</h5>
                              </center>
                          </div>
                      </a>
                      <a href="quiz.html">
                          <div class="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/football.png"  class="img-fluid rounded-circle circle-shadow"/>
                                  <h5 class="text-dark mt-2">Football</h5>
                              </center>
                          </div>
                      </a>
                      <a href="quiz.html">
                          <div class="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/hockey.png"  class="img-fluid rounded-circle circle-shadow"/>
                                  <h5 class="text-dark mt-2">Hockey</h5>
                              </center>
                          </div>
                      </a>

                      <a href="quiz.html">
                          <div class="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/tennis.png"  class="img-fluid rounded-circle circle-shadow"/>
                                  <h5 class="text-dark mt-2">Tennis</h5>
                              </center>
                          </div>
                      </a>
                      <a href="quiz.html">
                          <div class="square mt-4 cursor-pointer">
                              <center>
                                  <img src="images/category/sports.png"  class="img-fluid rounded-circle circle-shadow"/>
                                  <h5 class="text-dark mt-2">Soccer</h5>
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