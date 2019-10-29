import React from 'react'

const Footer = (props = {}) => {
  const {showLinks = true} = props
  return (
    <footer>
       <div className="row footer-container">
          <div className="twelve columns">
             {
               showLinks && <ul className="social-links">
               <li><a href="https://www.facebook.com/anirudh.kukkilaya.3" target='_blank'><i class="fab fa-facebook"></i></a></li>
               <li><a href="https://www.linkedin.com/in/anirudh-uk-48b74921" target='_blank'><i class="fab fa-linkedin"></i></a></li>
               <li><a href="https://github.com/ukanirudh" target='_blank'><i class="fab fa-github"></i></a></li>
               <li><a href="https://www.instagram.com/anirudhuk/" target='_blank'><i class="fab fa-instagram"></i></a></li>
               <li><a href="http://trippinzindagi.wordpress.com/" target='_blank'><i class="fab fa-wordpress"></i></a></li>
             </ul>
            }
            <hr />
            For Wild tours and expeditions, follow us on WindTrails
            <ul className="social-links">
              <li><a href="https://www.facebook.com/WindtrailsIndia-101865791197770/" target='_blank'><i class="fab fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/windtrailsindia/" target='_blank'><i class="fab fa-instagram"></i></a></li>
              <li><a href="http://trippinzindagi.wordpress.com/" target='_blank'><i class="fab fa-wordpress"></i></a></li>
            </ul>
            <hr />
            <ul className="copyright">
              <li>(+91)-9036565202</li>
              <li><a href="mailto:anirudh.anirudh93@gmail.com?Subject=Reach Out" target="_top">anirudh.anirudh93@gmail.com</a></li>
              <li>(+91)-7892329983</li>
            </ul>
          </div>
       </div>
    </footer>
  )
}

export default Footer
