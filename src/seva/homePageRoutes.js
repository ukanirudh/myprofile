import React from 'react'
import ProfileHome from './ProfileComponents'
import About from './ProfileComponents/About'
import Resume from './ProfileComponents/Resume'
import Portfolio from './ProfileComponents/Portfolio'
import Testimonials from './ProfileComponents/Testimonials'
import Footer from './ProfileComponents/Footer'
import 'semantic-ui-css/semantic.min.css'

const HomePageRoutes = () => {
  return (
    <div>
      <ProfileHome />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Footer showLinks />
    </div>
  )
}


export default HomePageRoutes;
