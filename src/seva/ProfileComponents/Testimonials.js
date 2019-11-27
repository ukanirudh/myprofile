import React from 'react'
//import Header from './Header'
import Footer from './Footer'
import DesktopContainer from './desktopContainer'
import ExpeditionSlider from './Expeditions/ExpeditionSlider'
import {Segment} from 'semantic-ui-react'

const Testimonials = () => {
  return (
    <React.Fragment>
      {/*<Header />*/}
      {/*<DesktopContainer />*/}
      <section id="testimonials">
          <div className="row">
            <h1>Client Testimonials</h1>
          </div>
         <div className="text-container">
            <div className="row">
               {/*<div className="two columns header-col">
               </div>*/}

               <div className="twelve columns flex-container">
                  <ExpeditionSlider />
                        {/*<li>
                           <blockquote>
                              <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is
                              to do what you believe is great work. And the only way to do great work is to love what you do.
                              If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
                              </p>
                              <cite>Steve Jobs</cite>
                           </blockquote>
                        </li>

                        <li>
                           <blockquote>
                              <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                              nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                              </p>
                              <cite>Mr. Adobe</cite>
                           </blockquote>
                        </li>*/}
               </div>
            </div>
          </div>
      </section>
      {/*<Footer />*/}
    </React.Fragment>
  )
}

export default Testimonials
