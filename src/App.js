/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css'
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
import IndexDescription from './components/IndexDescription';
import SideNav from './components/SideNav';
import MainNav from './components/MainNav';

function App() {
  return (
    <div className="home-bg mb-3">
      <SideNav />
      <MainNav />
      <LoginModal />
      <SignUpModal />
      <IndexDescription />

      <footer className="fixed-bottom mt-5 m-bg">
        <p className="color-blue ml-5"><small>Copyright &copy; ODBD 2024</small></p>
      </footer>
    </div>
  );
}

export default App;
