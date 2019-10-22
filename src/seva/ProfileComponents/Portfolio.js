import React from 'react'
//import Header from './Header'
import Footer from './Footer'
import DesktopContainer from './desktopContainer'
import { Card, Image, Container } from 'semantic-ui-react'
import portfolioImages from '../../static/data/PortfolioImages'
const imageBaseSrc = '../../static/images/works/'

const Portfolio = () => {
  return (
    <React.Fragment>
      {/*<Header />*/}
      {/*<DesktopContainer />*/}

      <Container id="portfolio">
        <h1>Check Out Some of My Works.</h1>
        <Card.Group itemsPerRow={3}>
        {
          portfolioImages.map((currentImage) => {
            const {activityDesc, imageUrl} = currentImage
            return (
              <Card>
                <Image wrapped src={require( `../../static/images/works/${imageUrl}`)} />
                <Card.Content>
                  <Card.Header>{activityDesc}</Card.Header>
                  <Card.Description>
                    Steve wants to add you to the group
                  </Card.Description>
                </Card.Content>
              </Card>
            )
          })
        }
        </Card.Group>
      </Container>

      {/*<Footer />*/}
    </React.Fragment>
  )
}

export default Portfolio
