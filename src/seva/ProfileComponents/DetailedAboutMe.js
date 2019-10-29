import React from 'react'

const DetailedAboutMe = () => {
  return (
    <React.Fragment>
      <div className="row section-head">
        <div className="eight columns">
          <h2>My Journey</h2>
          <p>
          As we tend to belive, every person needs to have an identity apart from his professional life(unless his passion and profession isnt the same).
          Which also defines the core values we belive in our lives and something we enjoy doing it, no matter the number of times we repeat.
          </p>
          <p className="">
          Have been a Trek lead and coordinator for quite a few different groups. Trekking has been an captivating experience for me.
          Every peak, every summit and every trail had something unique to offer us to our lives. The lessons learnt and the experinces
          gained are treasurable.
          </p>
          <p className="">
          While trekking had offered us some of the beautiful memories, it also paved us a way to connect with nature.
          I am also a wild life enthusiast and a hobby photographer, having been on multiple wild tours and birding expeditions,
          along with few other experienced enthusiasts.
          Have been associated with a wild life conservation NGO group, <span><a href='http://ecovolunteersindia.org.in/'>Eco Volunteers India</a></span>
          </p>
          <p>Take a peek at, some of the <span><a href="#portfolio">expeditions and wild tours</a></span> we have been to</p>
        </div>
        <div className="four columns header-col">
          <img className="profile-pic"  src={require('../../static/images/profile-2.jpg')} alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DetailedAboutMe
