import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {Visibility, Segment} from 'semantic-ui-react'

class Header extends Component {

  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render () {
    const { fixed } = this.state
    return (



      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Segment
          className='responsive-primary-container'
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
        <nav id="nav-wrap">
           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
           <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

           <ul id="nav" className="nav">
              <li className="current"><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/resume">Resume</NavLink></li>
              <li><NavLink to="/portfolio">Works</NavLink></li>
              <li><NavLink to="/testimonials">Testimonials</NavLink></li>
              {/*<li><NavLink to="/contact">Contact</NavLink></li>*/}
           </ul>
        </nav>

              <header id="home">
                 <div className="row banner">
                    <div className="banner-text">
                       <h1 className="responsive-headline">I'm Anirudh UK.</h1>
                       <h3>
                        An <span>UI developer</span> by profession. A <span>Traveller</span> and <span>Trekker</span> by passion.
                       </h3>
                       <h3> <i> Climb the mountains, not so that the world can see you, but so that you can see the world </i> </h3>
                       <hr />
                       <ul className="social">
                          <li><a href="https://www.facebook.com/anirudh.kukkilaya.3" target='_blank'><i className="fa fa-facebook"></i></a></li>
                          <li><a href="https://www.linkedin.com/in/anirudh-uk-48b74921" target='_blank'><i className="fa fa-linkedin"></i></a></li>
                          <li><a href="https://github.com/ukanirudh" target='_blank'><i className="fa fa-github"></i></a></li>
                          <li><a href="https://www.instagram.com/anirudhuk/" target='_blank'><i className="fa fa-instagram"></i></a></li>
                          <li><a href="http://trippinzindagi.wordpress.com/" target='_blank'><i className="fa fa-dribbble"></i></a></li>
                       </ul>
                    </div>
                 </div>

                 <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                 </p>
                 </header>
        </Segment>
      </Visibility>




    )
  }

}

export default Header
