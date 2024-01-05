/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';

function App() {
  const logoStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const buttonStyle = {
    fontFamily: 'Arial',
  };

  const flexCenterStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    fontWeight: '600',
  };
  return (
    <div className="">
      <div className="bg-light shadow">
        <div className="container-fluid justify-content-center">
          <section className="main-navbar py-3 mb-3 d-flex justify-content-between align-items-center">
            <div className="logo">
              <a href="#">
                <img
                  src="https://bkash.quizgiri.com.bd/img/logo.png"
                  alt="Shera logo"
                />
              </a>
            </div>

            <div className="d-flex gap-5">
              <div className="mr-2">
                <a
                  href="https://unsubscription.nagorik.tech/"
                  className="btn btn-sm primary-bg-color rounded-lg text-white"
                >
                  <b>আনসাবস্ক্রাইব করুন!</b>
                </a>
              </div>
              <div>
                <a
                  href="buy-pack/1025"
                  className="btn btn-sm primary-bg-color rounded-lg text-white"
                >
                  <b>সাবস্ক্রাইব করুন!</b>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="container-fluid justify-content-center">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item shadow active">
              <img
                src="/img/new_banner.jpg"
                className="d-block w-100 sliderImage"
                alt="কুইজ খেলুন"
              />
            </div>
          </div>
        </div>
        <div className="btn-play d-flex justify-content-center">
          <a
            href="#"
            className="btn btn-lg primary-bg-color text-white position-absolute shadow rounded-pill"
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            style={buttonStyle}
          >
            <b>কুইজ খেলুন &nbsp; &nbsp; <i className="bi bi-arrow-right"></i></b>
          </a>
        </div>

        <div
          className="modal fade justify-content-center"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered align-items-center">
            <div
              className="modal-content"
              style={{ marginLeft: '10px', marginRight: '10px' }}
            >
              <div className="modal-body p-0" id="app">
                {/* <Quiz /> */}
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="prize-list">
          <div className="prize-list-header" style={buttonStyle}>
            <h4 className="text-dark-color mb-0">প্রাইজ লিস্ট</h4>
            <p className="text-light-color">সর্বোমোট ১০০+</p>
          </div>
          <div className="owl-carousel" id="prize-carousel">
            <div className="prize-list-item">
              <img src="/img/prize-1.png" alt="" />
            </div>
            <div className="prize-list-item">
              <img src="/img/prize-2.png" alt="" />
            </div>
            <div className="prize-list-item">
              <img src="/img/prize-3.png" alt="" />
            </div>
            <div className="prize-list-item">
              <img src="/img/prize-4.png" alt="" />
            </div>
            <div className="prize-list-item">
              <img src="/img/prize-5.png" alt="" />
            </div>
            <div className="prize-list-item">
              <img src="/img/prize-6.png" alt="" />
            </div>
            <div className="prize-list-item">
              <img src="/img/prize-7.png" alt="" />
            </div>
          </div>
        </div>

        <br />
        <div className="leaderboard mb-4">
          <div className="leaderboard-header" style={buttonStyle}>
            <h4 className="text-dark-color mb-0">কুইজ বিজয়ী</h4>
            <p className="text-light-color">গত সপ্তাহের</p>
          </div>
          <div className="leaderboard-body bg-light pt-4">
            <div className="leaderboard-body-top">
              <div className="leaderboard-body-top-item">
                <img
                  className="rounded-circle"
                  src="/img/avatars/1704305510.jpg"
                  alt=""
                />
                <h5 className="font-weight-bold mt-2 mb-1">2</h5>
                <span>Jannatul</span>
                <br />
                <a href="#" className="btn btn-sm rounded-pill">5095</a>
              </div>

              <div className="leaderboard-body-top-item">
                <img
                  className="rounded-circle"
                  src="/img/avatars/1704100697.jpg"
                  alt=""
                />
                <h5 className="font-weight-bold mt-2 mb-1">1</h5>
                <span>Imran</span>
                <br />
                <a href="#" className="btn btn-sm rounded-pill">12005</a>
              </div>
              <div className="leaderboard-body-top-item">
                <img
                  className="rounded-circle"
                  src="/img/avatars/default.png"
                  alt=""
                />
                <h5 className="font-weight-bold mt-2 mb-1">3</h5>
                <span>SHIMANUL</span>
                <br />
                <a href="#" className="btn btn-sm rounded-pill">3270</a>
              </div>
            </div>
            <div className="leaderboard-body-bottom mt-4">
              <ul className="py-0 px-4">
                <li className="border-bottom py-2">
                  <span className="text-light-color">
                    <b>4</b> &nbsp;
                    <img
                      className="rounded-circle"
                      src="/img/avatars/default.png"
                      alt=""
                    />
                    &nbsp; showaib Siddique
                  </span>
                  <span className="font-weight-bold text-light-color">2445</span>
                </li>
                <li className="border-bottom py-2">
                  <span className="text-light-color">
                    <b>5</b> &nbsp;
                    <img
                      className="rounded-circle"
                      src="/img/avatars/default.png"
                      alt=""
                    />
                    &nbsp; Sunjida pritu
                  </span>
                  <span className="font-weight-bold text-light-color">1640</span>
                </li>
                <li className="border-bottom py-2">
                  <span className="text-light-color">
                    <b>6</b> &nbsp;
                    <img
                      className="rounded-circle"
                      src="/img/avatars/1704397113.jpg"
                      alt=""
                    />
                    &nbsp; Md Sojib Hasan Jiku
                  </span>
                  <span className="font-weight-bold text-light-color">1455</span>
                </li>
                <li className="border-bottom py-2">
                  <span className="text-light-color">
                    <b>7</b> &nbsp;
                    <img
                      className="rounded-circle"
                      src="/img/avatars/default.png"
                      alt=""
                    />
                    &nbsp; Habibur Rahman
                  </span>
                  <span className="font-weight-bold text-light-color">1270</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="leaderboard-body footer-body bg-light pt-2 mb-2 pb-2">
          <div className="logo">
            <a href="#">
              <img
                style={logoStyle}
                src="https://bkash.quizgiri.com.bd/img/logo.png"
                alt="Shera logo"
              />
            </a>
          </div>
          <p className="mt-2 mb-0" style={{ textAlign: 'center' }}>
            কুইজ খেলতে ডাউনলোড করুন মোবাইল অ্যাপ
          </p>

          <ul className="footer-list-group d-grid footer-list-group text-center px-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.einstechstudio.quiz&hl=en&gl=US"
            >
              <img
                className="footer-list-item text-decoration-none mr-2"
                style={{ width: '100px', height: '34px' }}
                src="/img/playStore.png"
                alt="Shera logo"
              />
            </a>
            <a href="https://apps.apple.com/us/app/quizgiri/id1536870159">
              <img
                className="footer-list-item text-decoration-none mr-2"
                style={{ width: '100px', height: '40px' }}
                src="/img/appStore.png"
                alt="Shera logo"
              />
            </a>
          </ul>

          <hr />
          <div style={flexCenterStyle}>
            <span>For any queries reach out to us </span>
            <span>
              <a href="tel:09638-009003">@09638-009003</a>
            </span>
          </div>
          <hr />

          <ul className="footer-list-group d-grid footer-list-group text-center mb-0 px-0">
            <a href="https://www.facebook.com/QuizGiriofficial/">
              <img
                className="footer-list-item text-decoration-none mr-3"
                style={{ height: '25px', width: '25px' }}
                src="/img/fb.png"
                alt="Facebook"
              />
            </a>
            <a href="https://www.facebook.com/messages/t/113529796751053">
              <img
                className="footer-list-item text-decoration-none mr-3 ml-3"
                style={{ height: '25px', width: '25px' }}
                src="/img/messenger.png"
                alt="Messenger"
              />
            </a>
            <a href="https://www.instagram.com/quizgiri/">
              <img
                className="footer-list-item text-decoration-none mr-3 ml-3"
                style={{ height: '25px', width: '25px' }}
                src="/img/instagram.png"
                alt="Instagram"
              />
            </a>
            <a href="https://quizgiri.xyz/privacy-policy.html">
              <img
                className="footer-list-item text-decoration-none mr-3 ml-3"
                style={{ height: '25px', width: '25px' }}
                src="/img/pp.png"
                alt="Privacy Policy"
              />
            </a>
            <a href="https://quizgiri.xyz/faq.html">
              <img
                className="footer-list-item text-decoration-none ml-3"
                style={{ height: '25px', width: '25px' }}
                src="/img/qa.png"
                alt="FAQ"
              />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
