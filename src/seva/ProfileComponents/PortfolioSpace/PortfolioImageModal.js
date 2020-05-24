import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Modal, Image } from 'semantic-ui-react'

const PortfolioImageModal = (props) => {
  const {curImgUrl} = props
  return (
    <Modal
    closeIcon
    open={props.modalOpen}
    onClose={props.toggleModalOpen} >
      {/* <Modal.Header>Portfolio Images</Modal.Header> */}
      <Modal.Content image>
        <Modal.Description style={{'width': '100%'}}>
          <Image src={curImgUrl} wrapped ui={false} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
)}

export default PortfolioImageModal
