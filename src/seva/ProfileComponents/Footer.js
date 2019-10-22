import React from 'react'

const Footer = (props = {}) => {
  const {showLinks = true} = props
  return (
    <footer>
       <div className="row">
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

             <ul className="copyright">
                <li>9036565202</li>
                <li>anirudh.anirudh93@gmail.com</li>
             </ul>
          </div>
       </div>
    </footer>
  )
}

export default Footer
