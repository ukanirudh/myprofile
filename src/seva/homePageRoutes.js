import React from 'react'
import { Route, Switch } from "react-router-dom";
import ProfileHome from './ProfileComponents'
import About from './ProfileComponents/About'
import Resume from './ProfileComponents/Resume'
import Portfolio from './ProfileComponents/Portfolio'
import Testimonials from './ProfileComponents/Testimonials'
import Contact from './ProfileComponents/Contact'
import DesktopContainer from './ProfileComponents/desktopContainer'
import 'semantic-ui-css/semantic.min.css'

/*const HomePageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProfileHome} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      <Route path="/container" component={DesktopContainer} />
    </Switch>
  )
}*/

const HomePageRoutes = () => {
  return (
    <div>
      <ProfileHome />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  )
}


export default HomePageRoutes;
