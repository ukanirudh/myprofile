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
              <h1><span>Get In Touch.</span></h1>
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
                <p className="address">
                  Jonathan Doe<br />
                  1600 Amphitheatre Parkway <br />
                  Mountain View, CA 94043 US<br />
                  <span>(123) 456-7890</span>
                </p>
              </div>
          </aside>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Contact
