import React from 'react'
//import Header from './Header'
import Footer from './Footer'
import DesktopContainer from './desktopContainer'

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
                A enthusiastic UI developer, thriving with the never ending flow of knowledge and a firm beliver of 'to learn is to grow'.
                And equally passionate about travelling, trekking and connecting with nature. Have been a trek lead and coordinator for quite a few groups.
                A wild life enthusiast and hobby photographer, associated with a wild life conservation NGO - Eco Volunteers India
               </p>

               <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                     <span>Anirudh UK</span>
                     <br />
                      <span>
                        #894, PV Rai, 2nd floor, 5th B main, vijaybank layout,
                        Bengaluru
                      </span>
                      <br />
                      <span>+91-9036565202</span>
                      <br />
                      <span>+91-7892329983</span>
                      <br />
                     <span>anirudh.anirudh93@gmail.com</span>
                    </p>
                  </div>

                  <div className="columns download">
                     <p>
                        <a href={require('../../static/data/Anirudh_resume.pdf')} download className="button">
                          <i className="fa fa-download"></i>
                          Download Resume
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/*<Footer />*/}
    </React.Fragment>
  )
}

export default About
