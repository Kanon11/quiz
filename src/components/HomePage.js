import React from 'react'
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import IndexDescription from './IndexDescription';
import SideNav from './SideNav';
import MainNav from './MainNav';
import Footer from './Footer';
 const HomePage=()=> {
  return (
      <div className="home-bg mb-3">
          <SideNav />
          <MainNav />
          <LoginModal />
          <SignUpModal />
          <IndexDescription />
          <Footer />
      </div>
  )
}
export default HomePage
