import React, { useCallback, useState } from 'react'
import { Card, Image, Container, Segment, Grid } from 'semantic-ui-react'
import {myWorks} from '../../static/data/PortfolioImages'
import PortfolioImageModal from './PortfolioSpace/PortfolioImageModal'
const imageBaseSrc = '../../static/images/works'


const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioImagesArr, setPortfolioImagesArr] = useState([]);

  const handleModalOpen = useCallback(() => {
  setIsOpen(prev => !prev);
  }, []);

  const handlePortfolioImagesArr = useCallback(() => {
    let getAllImagesArray = myWorks.map((workGroup) => {
      const {activities} = workGroup
      return activities.map(({imageUrl}, activityIndex) => imageUrl)
    })

    getAllImagesArray = getAllImagesArray.flat()
    if (portfolioImagesArr.length === 0) {
      setPortfolioImagesArr(getAllImagesArray)
    }
  }, [portfolioImagesArr])

  const handleItemClick = (data) => {
    const {currentActivity: {externalSrc}} = data
    if (externalSrc) {
      window.open(externalSrc)
    } else {
      handleModalOpen()
      handlePortfolioImagesArr()
    }
  }

  return (
    <React.Fragment>
      <Container id='portfolio'>
        <PortfolioImageModal allImages={portfolioImagesArr} modalOpen={isOpen} toggleModalOpen={handleModalOpen}/>
        <div className='portfolio-sections-container'>
          {
            myWorks.map((workGroup, workIndex) => {
              const {name: workGroupName, displayName: workGroupdisplayName, activities} = workGroup
              return (
                <Segment id={`${workGroupName}`} key={`${workGroupName}-${workIndex}`} className='portfolio-workgrp-container'>
                  <h1>{workGroupdisplayName}</h1>
                  <Grid centered>

                    {
                      activities.map((currentActivity, activityIndex) => {
                        const {activityDate, imageUrl, activityName, activityLocation} = currentActivity
                        return (
                          <Grid.Column mobile={16} tablet={8} computer={5}>
                            <Card
                              name={activityName}
                              className='portfolio-card'
                              key={`${activityName}-${activityIndex}`}
                              onClick={(e, elemData) => handleItemClick({...e, elemData, currentActivity, workGroupName})} >
                                <Image wrapped src={require( `../../static/images/works/${imageUrl}`)} />
                                <Card.Content>
                                  <Card.Header>{activityName}</Card.Header>
                                  <Card.Description>
                                    {`${activityLocation}, ${activityDate}`}
                                  </Card.Description>
                                </Card.Content>
                            </Card>
                          </Grid.Column>
                        )
                      })
                    }
                  </Grid>
                </Segment>
              )
            })
          }
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Portfolio
