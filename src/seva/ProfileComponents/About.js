import React from 'react'
//import Header from './Header'
import Footer from './Footer'
import DesktopContainer from './desktopContainer'
import DetailedAboutMe from './DetailedAboutMe'

const About = () => {
  return (
    <React.Fragment>
      {/*<Header />*/}
      {/*<DesktopContainer />*/}
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={require('../../static/images/profile.png')} alt="" />
            </div>

            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>
                An enthusiastic UI developer, thriving with the never ending inflow of knowledge and a firm beliver of 'to learn is to grow'.
                4 years of professional experience on UI/Web development, with a diverse jounery of working with a Big scale MNC(Oracle),
                to a Growing startup(Jifflenow), to a Mid sized MNC(Syncron international).
               </p>
               <p className="">
               Predominantly worked on ReactJs library for various projects, including professional and freelance projects, but equally have been exposed to other tech stacks on UI and backend.
               Follow up more under <span> <a href="#resume">Resume section</a></span>
               </p>
            </div>
         </div>
         <DetailedAboutMe />
      </section>
      {/*<Footer />*/}
    </React.Fragment>
  )
}

export default About
