import React from 'react'
//import Header from './Header'
import Footer from './Footer'
import DesktopContainer from './desktopContainer'

const ProfileContainer = () => {
    return (
      <React.Fragment>
        {/*<Header />*/}
        <DesktopContainer showLinks />
        {/*<Footer showLinks={false} />*/}
      </React.Fragment>
    )
}

export default ProfileContainer
