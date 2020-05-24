import React, { useCallback, useState } from 'react'
import { Card, Container, Segment, Grid, Image } from 'semantic-ui-react'
import {myWorks} from '../../static/data/PortfolioImages'
import PortfolioImageModal from './PortfolioSpace/PortfolioImageModal'
import cloudinary from 'cloudinary-core';
import {cloudinaryConfig} from '../constants'

const {cloudName, portfolioSectionUrl} = cloudinaryConfig
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: cloudName});

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [curPortfolioImage, setCurPortfolioImage] = useState('');

  const handleModalOpen = useCallback(() => {
  setIsOpen(prev => !prev);
  }, []);

  const portfolioImageSelect = useCallback((curImgUrl) => {
    setCurPortfolioImage(curImgUrl)
  }, [curPortfolioImage])

  const handleItemClick = (data) => {
    const {currentActivity: {externalSrc}, curImgUrl} = data
    if (externalSrc) {
      window.open(externalSrc)
    } else {
      handleModalOpen()
      portfolioImageSelect(curImgUrl)
    }
  }

  return (
    <React.Fragment>
      <Container id='portfolio'>
        <PortfolioImageModal 
          curImgUrl={curPortfolioImage} 
          modalOpen={isOpen} 
          toggleModalOpen={handleModalOpen}
        />
        <div className='portfolio-sections-container'>
          {
            myWorks.map((workGroup, workIndex) => {
              const {name: workGroupName, displayName: workGroupdisplayName, activities} = workGroup
              return (
                <Segment 
                  id={`${workGroupName}`} 
                  key={`${workGroupName}-${workIndex}`} 
                  className='portfolio-workgrp-container'
                >
                  <h1>{workGroupdisplayName}</h1>
                  <Grid centered>
                    {
                      activities.map((currentActivity, activityIndex) => {
                        const {activityDate, imageUrl, activityName, activityLocation} = currentActivity
                        const publicIdRelativeUrl = `${portfolioSectionUrl}/${workGroupName}`
                        const curImgUrl = cloudinaryCore.url(`${publicIdRelativeUrl}/${imageUrl}`)
                        return (
                          <Grid.Column 
                            mobile={16} tablet={8} computer={5} 
                            key={`${activityName}-${activityIndex}`}>
                            <Card
                              as='div'
                              name={activityName}
                              className='portfolio-card'
                              onClick={(e, elemData) => handleItemClick({...e, elemData, currentActivity, workGroupName, curImgUrl})} >
                                <Image src={curImgUrl} wrapped ui={false} />
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
