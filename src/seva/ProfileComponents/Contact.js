import React from 'react'
//import Header from './Header'
import Footer from './Footer'
import DesktopContainer from './desktopContainer'

const Contact = () => {
  return (
    <React.Fragment>
      {/*<Header />*/}
      {/*<DesktopContainer />*/}
      <section id="contact">
        <div className="row section-head">
           <div className="two columns header-col">
              <img className="profile-pic"  src={require('../../static/images/profile.png')} alt="" />
           </div>

           <div className="ten columns">
             <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
             eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
             voluptatem quia voluptas sit aspernatur aut odit aut fugit.
             </p>
           </div>
        </div>

        <div className="row">
           <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
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
              </div>
          </aside>
        </div>
      </section>
      {/*<Footer />*/}
    </React.Fragment>
  )
}

export default Contact
