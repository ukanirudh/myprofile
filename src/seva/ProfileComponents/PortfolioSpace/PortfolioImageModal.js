import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button, Header, Modal } from 'semantic-ui-react'

const PortfolioImageModal = (props) => {
  const {allImages} = props
  return (
    <Modal
    closeIcon
    open={props.modalOpen}
    onClose={props.toggleModalOpen} >
      <Modal.Header>Portfolio Images</Modal.Header>
      <Modal.Content image>
        <Modal.Description style={{'width': '100%'}}>
          {/*<Header>Default Profile Image</Header>*/}
          <Carousel autoPlay>
            {
              allImages.map((imageEle, index) => {
                return (
                  <div>
                    <img src={require( `../../../static/images/works/${imageEle}`)} />
                    {/*<p className="legend">{`Legend ${index+1}`}</p>*/}
                  </div>
                )
              })
            }
          </Carousel>
        </Modal.Description>
      </Modal.Content>
    </Modal>
)}

export default PortfolioImageModal
