import React from 'react'
import { Button, Modal } from 'reactstrap'

const ModalBox = ({
  children,
  isToggled,
  modalTitle = '',
  onClose,
  onCreate,
}) => {
  return (
    <Modal className="modal-dialog-centered" isOpen={isToggled}>
      <div className="modal-header">
        <h3 className="modal-title">{modalTitle}</h3>
        <button
          type="button"
          className="close"
          aria-label="Close"
          data-dismiss="modal"
          onClick={onClose}
        >
          <span aria-hidden>
            <i className="ni ni-fat-remove" />
          </span>
        </button>
      </div>
      <div className="modal-body">{children}</div>
      <div className="modal-footer">
        <Button type="button" color="primary" onClick={onCreate}>
          Create
        </Button>
        <Button
          type="button"
          color="secondary"
          data-dismiss="modal"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  )
}

export default ModalBox
