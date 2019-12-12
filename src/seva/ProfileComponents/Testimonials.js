import React from 'react'
import ExpeditionSlider from './Expeditions/ExpeditionSlider'
import {Segment} from 'semantic-ui-react'

const Testimonials = () => {
  return (
    <React.Fragment>
      <section id="testimonials">
          <div className="row">
            <h1>Client Testimonials</h1>
          </div>
         <div className="text-container">
            <div className="row">
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
                        </li>*/}
               </div>
            </div>
          </div>
      </section>
    </React.Fragment>
  )
}

export default Testimonials
