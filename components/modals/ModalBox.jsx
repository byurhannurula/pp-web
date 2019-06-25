import React from 'react'
import { Modal, CardBody } from 'reactstrap'

const ModalBox = ({ children, isToggled, modalTitle = '' }) => {
  return (
    <Modal className="modal-dialog-centered" isOpen={isToggled}>
      <div className="modal-header">
        <h3 className="modal-title">{modalTitle}</h3>
      </div>
      <CardBody>{children}</CardBody>
    </Modal>
  )
}

export default ModalBox
