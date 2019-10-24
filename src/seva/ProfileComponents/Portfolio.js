import React from 'react'
//import Header from './Header'
import Footer from './Footer'
import DesktopContainer from './desktopContainer'
import { Card, Image, Container, Segment } from 'semantic-ui-react'
import portfolioImages, {myWorks} from '../../static/data/PortfolioImages'
const imageBaseSrc = '../../static/images/works/'

const Portfolio = () => {
  return (
    <React.Fragment>
      {/*<Header />*/}
      {/*<DesktopContainer />*/}

      <Container id="portfolio">

        <div>
          {
            myWorks.map((workGroup, workIndex) => {
              const {name: workGroupName, displayName: workGroupdisplayName, activities} = workGroup
              return (
                <Segment key={`${workGroupName}-${workIndex}`}>
                  <h1>{workGroupdisplayName}</h1>
                  <Card.Group itemsPerRow={3}>
                  {
                    activities.map((currentActivity, activityIndex) => {
                      const {activityDate, imageUrl, activityName, activityLocation} = currentActivity
                      return (
                        <Card key={`${activityName}-${activityIndex}`}>
                          <Image wrapped src={require( `../../static/images/works/${imageUrl}`)} />
                          <Card.Content>
                            <Card.Header>{activityName}</Card.Header>
                            <Card.Description>
                              {`${activityLocation}, ${activityDate}`}
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      )
                    })
                  }
                  </Card.Group>
                </Segment>
              )
            })
          }
        </div>
      </Container>

      {/*<Footer />*/}
    </React.Fragment>
  )
}

export default Portfolio
